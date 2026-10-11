// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { captureAttribution, readAttribution } from '@/lib/attribution.js'
import { enquiryHref, whatsappUrl, weddingMessage } from '@/lib/contactLinks.js'

beforeEach(() => window.sessionStorage.clear())

describe('captureAttribution', () => {
  it('records the entry page and campaign, and only the presence of a Google Ads click', () => {
    window.history.replaceState(null, '',
      '/music/saxophone?utm_source=google&utm_campaign=123&utm_term=wedding+sax&gclid=SECRET')
    captureAttribution()
    const record = readAttribution()
    expect(record).toEqual({
      landing: '/music/saxophone', referrer: '', ad_click: true,
      utm_source: 'google', utm_campaign: '123', utm_term: 'wedding sax',
    })
    expect(JSON.stringify(record)).not.toContain('SECRET')
  })

  it('keeps the first page of the session', () => {
    window.history.replaceState(null, '', '/locations/ravello')
    captureAttribution()
    window.history.replaceState(null, '', '/contact')
    captureAttribution()
    expect(readAttribution().landing).toBe('/locations/ravello')
  })
})

describe('contact links', () => {
  it('builds pre-filled enquiry links', () => {
    expect(enquiryHref()).toBe('/contact')
    expect(enquiryHref({ ensemble: 'Piano Solo' })).toBe('/contact?ensemble=Piano+Solo')
    expect(enquiryHref({ venue: 'Villa Cimbrone' })).toBe('/contact?venue=Villa+Cimbrone')
  })

  it('builds a wa.me link to the platform number with an encoded message', () => {
    const url = new URL(whatsappUrl(weddingMessage({ place: 'in Ravello', interest: 'the saxophone' })))
    expect(url.origin + url.pathname).toBe('https://wa.me/393932130911')
    expect(url.searchParams.get('text')).toBe(
      "Hello! We're planning our wedding in Ravello and would love live music. " +
      "We're interested in the saxophone. Could you send us some information?")
  })
})
