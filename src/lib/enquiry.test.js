// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

const trackConversion = vi.fn()
vi.mock('@/lib/googleTag.js', () => ({ trackConversion }))

const { submitEnquiry } = await import('@/lib/enquiry.js')
const { ATTRIBUTION_KEY } = await import('@/lib/attribution.js')
const {
  grantEnquirySuccess, shouldSendThankYouPageView, markThankYouPageViewSent,
} = await import('@/lib/enquirySuccess.js')

beforeEach(() => {
  trackConversion.mockClear()
  window.sessionStorage.clear()
})
afterEach(() => vi.unstubAllGlobals())

describe('submitEnquiry', () => {
  it('sends exactly one enquiry conversion after a successful submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))
    await submitEnquiry({ name: 'A', email: 'a@b.co' })
    expect(trackConversion).toHaveBeenCalledTimes(1)
    expect(trackConversion).toHaveBeenCalledWith('enquiry')
  })

  it('sends no conversion when the server answers with an error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))
    await expect(submitEnquiry({ name: 'A', email: 'a@b.co' })).rejects.toThrow()
    expect(trackConversion).not.toHaveBeenCalled()
  })

  it('sends no conversion when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')))
    await expect(submitEnquiry({ name: 'A', email: 'a@b.co' })).rejects.toThrow()
    expect(trackConversion).not.toHaveBeenCalled()
  })

  it('posts the form together with the session attribution', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ landing: '/music/saxophone' }))
    await submitEnquiry({ name: 'A', email: 'a@b.co' })
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body).toMatchObject({ name: 'A', email: 'a@b.co', source: { landing: '/music/saxophone' } })
  })
})

describe('/thank-you one-time authorization', () => {
  it('allows one page view, none on refresh, none without a submission', () => {
    expect(shouldSendThankYouPageView()).toBe(false) // direct visit
    expect(grantEnquirySuccess()).toBe(true)
    expect(shouldSendThankYouPageView()).toBe(true)
    markThankYouPageViewSent()
    expect(shouldSendThankYouPageView()).toBe(false) // refresh
  })
})
