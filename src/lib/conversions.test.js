import { describe, it, expect } from 'vitest'
import { ADS_CONVERSION_LABELS } from '@/lib/conversions.js'

// The Google Ads account of weddingmusicravello.com (tag AW-18311455806).
const ACCOUNT_ID = 18311455806
// The donatocipriano.com account — its labels must never appear here.
const OTHER_ACCOUNT_ID = 1003501184

// A conversion label is a base64url protobuf whose last field (number 2,
// varint) is the account's conversion id. The format is not documented by
// Google: if a real label does not decode this way, report it — do not bend
// the test to fit.
function labelConversionId(label) {
  const bytes = Buffer.from(label, 'base64url')
  let start = bytes.length - 1
  if (start < 1 || bytes[start] & 0x80) return null
  while (start > 0 && bytes[start - 1] & 0x80) start--
  if (bytes[start - 1] !== 0x10) return null
  let value = 0
  for (let i = bytes.length - 1; i >= start; i--) value = value * 128 + (bytes[i] & 0x7f)
  return value
}

// Build a synthetic label for a given conversion id (field 1 = opaque bytes,
// field 2 = varint id) to exercise the decoder itself.
function syntheticLabel(id, opaque = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06]) {
  const varint = []
  let n = id
  while (n >= 128) { varint.push((n % 128) | 0x80); n = Math.floor(n / 128) }
  varint.push(n)
  return Buffer.from([0x0a, opaque.length, ...opaque, 0x10, ...varint]).toString('base64url')
}

describe('labelConversionId (decoder)', () => {
  it('decodes the account id from a well-formed label', () => {
    expect(labelConversionId(syntheticLabel(ACCOUNT_ID))).toBe(ACCOUNT_ID)
    expect(labelConversionId(syntheticLabel(OTHER_ACCOUNT_ID))).toBe(OTHER_ACCOUNT_ID)
  })

  it('rejects labels that do not end with a field-2 varint', () => {
    expect(labelConversionId('')).toBeNull()
    expect(labelConversionId(Buffer.from([0x0a, 0x01, 0x05]).toString('base64url'))).toBeNull()
  })
})

describe('ADS_CONVERSION_LABELS', () => {
  const entries = Object.entries(ADS_CONVERSION_LABELS)

  it('has the expected channels', () => {
    expect(Object.keys(ADS_CONVERSION_LABELS).sort())
      .toEqual(['email', 'enquiry', 'phone', 'whatsapp'])
  })

  it('contains only strings in base64url form (or empty = channel disabled)', () => {
    for (const [, label] of entries) {
      expect(typeof label).toBe('string')
      expect(label).toMatch(/^[A-Za-z0-9_-]*$/)
    }
  })

  it.each(entries.filter(([, label]) => label))(
    'label of "%s" belongs to AW-18311455806',
    (_channel, label) => {
      expect(labelConversionId(label)).toBe(ACCOUNT_ID)
    },
  )
})
