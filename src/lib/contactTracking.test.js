// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'

// jsdom cannot navigate: cancel link clicks after the (capture-phase) tracker has run.
document.addEventListener('click', e => e.preventDefault())

describe('classifyContactHref', async () => {
  const { classifyContactHref } = await import('@/lib/contactTracking.js')

  it.each([
    ['https://wa.me/393932130911?text=Hello', 'whatsapp'],
    ['https://api.whatsapp.com/send?phone=393932130911', 'whatsapp'],
    ['whatsapp://send?phone=393932130911', 'whatsapp'],
    ['mailto:info@weddingmusicravello.com', 'email'],
    ['MAILTO:info@weddingmusicravello.com', 'email'],
    ['tel:+393932130911', 'phone'],
  ])('%s → %s', (href, channel) => {
    expect(classifyContactHref(href)).toBe(channel)
  })

  it.each([
    '/contact', '/contact?ensemble=Saxophone', 'https://www.evostrings.it/',
    'http://wa.me/393932130911', 'https://wa.me.example.com/1', '#music', '', null, undefined,
  ])('%s → null', href => {
    expect(classifyContactHref(href)).toBeNull()
  })
})

describe('installContactClickTracking', () => {
  let install
  beforeEach(async () => {
    vi.resetModules() // fresh module → fresh "installed" flag
    ;({ installContactClickTracking: install } = await import('@/lib/contactTracking.js'))
    document.body.innerHTML = `
      <a id="mail" href="mailto:info@weddingmusicravello.com"><span id="inner">Email</span></a>
      <a id="wa" href="https://wa.me/393932130911">WhatsApp</a>
      <a id="page" href="/contact">Enquire</a>`
    window.history.replaceState(null, '', '/contact')
  })

  const click = id => document.getElementById(id)
    .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))

  it('reports exactly one channel per click, also from nested elements', () => {
    const onContact = vi.fn()
    install(onContact)
    click('inner')
    click('wa')
    click('page')
    expect(onContact.mock.calls).toEqual([['email'], ['whatsapp']])
  })

  it('is idempotent: installing twice never double-counts', () => {
    const onContact = vi.fn()
    install(onContact)
    install(onContact)
    click('wa')
    expect(onContact).toHaveBeenCalledTimes(1)
  })

  it('covers links added after installation', () => {
    const onContact = vi.fn()
    install(onContact)
    const late = document.createElement('a')
    late.href = 'mailto:info@weddingmusicravello.com'
    late.id = 'late'
    document.body.appendChild(late)
    click('late')
    expect(onContact).toHaveBeenCalledWith('email')
  })

  it('ignores contact links on the privacy policy', () => {
    const onContact = vi.fn()
    install(onContact)
    window.history.replaceState(null, '', '/privacy')
    click('mail')
    expect(onContact).not.toHaveBeenCalled()
  })
})
