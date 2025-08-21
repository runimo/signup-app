import { describe, it, expect } from 'vitest'
import { PASSWORD_ERRORS, PASSWORD_ERRORS_GROUPED } from '../../constants/error-messages'
import usePasswordValidation from '../../composables/usePasswordValidation'

const INVALID_PASSWORDS = {
  EMPTY: '',
  TOO_SHORT: 'sho?r1t',
  NO_UPPERCASE: 'lower4_case',
  NO_LOWERCASE: 'UPPER_CASE3',
  NO_NUMBER: 'NoNumber!',
  NO_SPECIAL_CHAR: 'NoSpecialChar1',
  SPACES: 'With Spaces 1!',
  ONLY_LOWERCASE: 'onlylow',
  ONLY_UPPERCASE: 'ONLYUP',
  ONLY_NUMBERS: '123456',
  ONLY_SPECIAL_CHARS: '!@#$%^',
  ONLY_SPACES: '    ',
} as const

const VALID_PASSWORD = 'Valid1Password!'

describe('usePasswordValidation', () => {
  it('returns undefined if password is valid', () => {
    const result = usePasswordValidation(VALID_PASSWORD)

    expect(result[0]).toEqual(undefined)
  })

  it('returns "empty password" error if password is an empty string', () => {
    const result = usePasswordValidation('')

    expect(result[0]).toEqual(PASSWORD_ERRORS.EMPTY)
  })

  it('returns minlength error if password is less than 8 characters long', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.TOO_SHORT)

    expect(result[0]).toEqual(PASSWORD_ERRORS.MIN_LENGTH)
  })

  it('returns "no uppercase" error if password contains no uppercase character', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_UPPERCASE)

    expect(result[0]).toEqual(PASSWORD_ERRORS.UPPERCASE)
  })

  it('returns "no lowercase" error if password contains no lowercase character', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_LOWERCASE)

    expect(result[0]).toEqual(PASSWORD_ERRORS.LOWERCASE)
  })

  it('returns "no number" error if password contains no number', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_NUMBER)

    expect(result[0]).toEqual(PASSWORD_ERRORS.NUMBER)
  })

  it('returns "no special char" error if password contains no special character', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_SPECIAL_CHAR)

    expect(result[0]).toEqual(PASSWORD_ERRORS.SPECIAL_CHAR)
  })

  it('returns "has spaces" error if password contains spaces', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.SPACES)

    expect(result[0]).toEqual(PASSWORD_ERRORS.SPACES)
  })

  it('returns "too short, no uppercase, no number, no special char" errors if password is only lowercase and too short', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.ONLY_LOWERCASE)

    expect(result).toEqual(PASSWORD_ERRORS_GROUPED.ONLY_LOWERCASE)
  })

  it('returns "too short, no lowercase, no number, no special char" errors if password is only uppercase and too short', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.ONLY_UPPERCASE)

    expect(result).toEqual(PASSWORD_ERRORS_GROUPED.ONLY_UPPERCASE)
  })

  it('returns "too short, no lowercase, no uppercase, no special char" errors if password is only numbers and too short', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.ONLY_NUMBERS)

    expect(result).toEqual(PASSWORD_ERRORS_GROUPED.ONLY_NUMBERS)
  })

  it('returns "too short, no lowercase, no uppercase, no number" errors if password is only special chars and too short', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.ONLY_SPECIAL_CHARS)

    expect(result).toEqual(PASSWORD_ERRORS_GROUPED.ONLY_SPECIAL_CHARS)
  })

  it('returns "too short, no lowercase, no uppercase, no number, no special chars, spaces" errors if password is only spaces and too short', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.ONLY_SPACES)

    expect(result).toEqual(PASSWORD_ERRORS_GROUPED.ONLY_SPACES)
  })
})
