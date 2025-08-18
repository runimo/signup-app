import { describe, it, expect } from 'vitest'
import usePasswordValidation from '../../composables/usePasswordValidation'

const PASSWORD_ERRORS = {
  EMPTY: 'Please enter a password.',
  MIN_LENGTH: 'Please enter at least 8 characters.',
  NO_UPPERCASE: 'Please use at least one uppercase letter.',
  NO_LOWERCASE: 'Please use at least one lowercase letter.',
  NO_NUMBER: 'Please use at least one number.',
  NO_SPECIAL_CHAR: 'Please use at least one special character.',
  SPACES: 'Please do not use spaces.',
}

const PASSWORD_ERRORS_GROUPED = {
  ONLY_LOWERCASE: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.NO_UPPERCASE,
    PASSWORD_ERRORS.NO_NUMBER,
    PASSWORD_ERRORS.NO_SPECIAL_CHAR,
  ],
  ONLY_UPPERCASE: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.NO_LOWERCASE,
    PASSWORD_ERRORS.NO_NUMBER,
    PASSWORD_ERRORS.NO_SPECIAL_CHAR,
  ],
  ONLY_NUMBERS: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.NO_UPPERCASE,
    PASSWORD_ERRORS.NO_LOWERCASE,
    PASSWORD_ERRORS.NO_SPECIAL_CHAR,
  ],
  ONLY_SPECIAL_CHARS: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.NO_UPPERCASE,
    PASSWORD_ERRORS.NO_LOWERCASE,
    PASSWORD_ERRORS.NO_NUMBER,
  ],
  ONLY_SPACES: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.NO_UPPERCASE,
    PASSWORD_ERRORS.NO_LOWERCASE,
    PASSWORD_ERRORS.NO_NUMBER,
    PASSWORD_ERRORS.NO_SPECIAL_CHAR,
    PASSWORD_ERRORS.SPACES,
  ],
}

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
}

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

    expect(result[0]).toEqual(PASSWORD_ERRORS.NO_UPPERCASE)
  })

  it('returns "no lowercase" error if password contains no lowercase character', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_LOWERCASE)

    expect(result[0]).toEqual(PASSWORD_ERRORS.NO_LOWERCASE)
  })

  it('returns "no number" error if password contains no number', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_NUMBER)

    expect(result[0]).toEqual(PASSWORD_ERRORS.NO_NUMBER)
  })

  it('returns "no special char" error if password contains no special character', () => {
    const result = usePasswordValidation(INVALID_PASSWORDS.NO_SPECIAL_CHAR)

    expect(result[0]).toEqual(PASSWORD_ERRORS.NO_SPECIAL_CHAR)
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
