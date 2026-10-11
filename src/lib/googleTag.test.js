// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// jsdom cannot navigate: cancel link clicks after the (capture-phase) tracker has run.
document.addEventListener('click', e => e.preventDefault())

const TAG = 'AW-18311455806'
const LABELS = { enquiry: 'enqLabel', email: 'mailLabel', whatsapp: '', phone: '' }

// Load googleTag.js fresh with a given tag id and set of labels.
async function loadGoogleTag({ tagId = TAG, labels = LABELS } = {}) {
  vi.resetModules()
  vi.stubEnv('VITE_GOOGLE_TAG_ID', tagId)
  vi.doMock('@/lib/conversions.js', () => ({ ADS_CONVERSION_LABELS: labels }))
  return import('@/lib/googleTag.js')
}

// gtag pushes `arguments` objects onto dataLayer → plain arrays for asserts.
const commands = () => (window.dataLayer || []).map(args => Array.from(args))
const conversions = () => commands().filter(([cmd, name]) => cmd === 'event' && name === 'conversion')

beforeEach(() => {
  delete window.dataLayer
  delete window.gtag
  document.head.innerHTML = ''
  document.body.innerHTML = ''
  window.history.replaceState(null, '', '/')
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.doUnmock('@/lib/conversions.js')
})

describe('trackConversion', () => {
  it('sends one conversion with the account tag and the channel label', async () => {
    const { trackConversion } = await loadGoogleTag()
    expect(trackConversion('enquiry')).toBe(true)
    expect(conversions()).toEqual([['event', 'conversion', {
      send_to: `${TAG}/enqLabel`, value: 1.0, currency: 'EUR', transport_type: 'beacon',
    }]])
  })

  it('sends nothing when the channel label is empty', async () => {
    const { trackConversion } = await loadGoogleTag()
    expect(trackConversion('whatsapp')).toBe(false)
    expect(conversions()).toEqual([])
  })

  it('does nothing at all without a tag id', async () => {
    const { trackConversion } = await loadGoogleTag({ tagId: '' })
    expect(trackConversion('enquiry')).toBe(false)
    expect(window.dataLayer).toBeUndefined()
  })
})

describe('initGoogleTag', () => {
  it('sets ads_data_redaction and url_passthrough before config', async () => {
    const { initGoogleTag } = await loadGoogleTag()
    initGoogleTag()
    const names = commands().map(([cmd, key]) => `${cmd}:${typeof key === 'string' ? key : ''}`)
    const config = names.indexOf(`config:${TAG}`)
    expect(names.indexOf('set:ads_data_redaction')).toBeGreaterThan(-1)
    expect(names.indexOf('set:url_passthrough')).toBeGreaterThan(-1)
    expect(names.indexOf('set:ads_data_redaction')).toBeLessThan(config)
    expect(names.indexOf('set:url_passthrough')).toBeLessThan(config)
  })

  it('counts a contact click exactly once, even if initialised again', async () => {
    const { initGoogleTag } = await loadGoogleTag()
    initGoogleTag()
    initGoogleTag()
    document.body.innerHTML = '<a id="m" href="mailto:info@weddingmusicravello.com">mail</a>'
    document.getElementById('m').dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    expect(conversions()).toHaveLength(1)
    expect(conversions()[0][2].send_to).toBe(`${TAG}/mailLabel`)
  })

  it('sends no request for a click on a channel without label', async () => {
    const { initGoogleTag } = await loadGoogleTag()
    initGoogleTag()
    document.body.innerHTML = '<a id="w" href="https://wa.me/393932130911">wa</a>'
    document.getElementById('w').dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    expect(conversions()).toEqual([])
  })
})
