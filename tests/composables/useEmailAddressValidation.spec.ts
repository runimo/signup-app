import { describe, it, expect } from 'vitest'
import useEmailAddressValidation from '../../composables/useEmailAddressValidation'

const EMAIL_ERRORS = {
  EMPTY: 'Please enter an email address, e.g. user@example.com.',
  INVALID: 'Please enter a valid email address, e.g. user@example.com.',
}
const INVALID_EMAIL_ADDRESSES = {
  LETTERS_ONLY: 'letterOnlyString',
  MISSING_LOCAL_PART: '@missingusername.com',
  MISSING_AT_SIGN: 'missingatsign.com',
  MISSING_DOMAIN: 'missingdomain@',
  DUPLICATE_DOT: 'toomanydots@domain..com',
}

describe('useEmailAddressValidation', () => {
  it('returns "empty email" error if email address is an empty string', () => {
    const result = useEmailAddressValidation('')

    expect(result[0]).toEqual(EMAIL_ERRORS.EMPTY)
  })

  it('returns "invalid email" error if email address is a letter-only string', () => {
    const result = useEmailAddressValidation(INVALID_EMAIL_ADDRESSES.LETTERS_ONLY)

    expect(result[0]).toEqual(EMAIL_ERRORS.INVALID)
  })

  it('returns "invalid email" error if email address is missing local part', () => {
    const result = useEmailAddressValidation(INVALID_EMAIL_ADDRESSES.MISSING_LOCAL_PART)

    expect(result[0]).toEqual(EMAIL_ERRORS.INVALID)
  })

  it('returns "invalid email" error if email address is missing @ sign', () => {
    const result = useEmailAddressValidation(INVALID_EMAIL_ADDRESSES.MISSING_AT_SIGN)

    expect(result[0]).toEqual(EMAIL_ERRORS.INVALID)
  })

  it('returns "invalid email" error if email address is missing domain', () => {
    const result = useEmailAddressValidation(INVALID_EMAIL_ADDRESSES.MISSING_DOMAIN)

    expect(result[0]).toEqual(EMAIL_ERRORS.INVALID)
  })

  it('returns "invalid email" error if email address has two dots after each other', () => {
    const result = useEmailAddressValidation(INVALID_EMAIL_ADDRESSES.DUPLICATE_DOT)

    expect(result[0]).toEqual(EMAIL_ERRORS.INVALID)
  })
})
