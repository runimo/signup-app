export const EMAIL_ERRORS = {
  EMPTY: 'Please enter an email address, e.g. user@example.com.',
  INVALID: 'Please enter a valid email address, e.g. user@example.com.',
} as const

export const PASSWORD_ERRORS = {
  EMPTY: 'Please enter a password.',
  MIN_LENGTH: 'Please enter at least 8 characters.',
  UPPERCASE: 'Please use at least one uppercase letter.',
  LOWERCASE: 'Please use at least one lowercase letter.',
  NUMBER: 'Please use at least one number.',
  SPECIAL_CHAR: 'Please use at least one special character.',
  SPACES: 'Please do not use spaces.',
} as const

export const PASSWORD_ERRORS_GROUPED = {
  ONLY_LOWERCASE: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.UPPERCASE,
    PASSWORD_ERRORS.NUMBER,
    PASSWORD_ERRORS.SPECIAL_CHAR,
  ],
  ONLY_UPPERCASE: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.LOWERCASE,
    PASSWORD_ERRORS.NUMBER,
    PASSWORD_ERRORS.SPECIAL_CHAR,
  ],
  ONLY_NUMBERS: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.UPPERCASE,
    PASSWORD_ERRORS.LOWERCASE,
    PASSWORD_ERRORS.SPECIAL_CHAR,
  ],
  ONLY_SPECIAL_CHARS: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.UPPERCASE,
    PASSWORD_ERRORS.LOWERCASE,
    PASSWORD_ERRORS.NUMBER,
  ],
  ONLY_SPACES: [
    PASSWORD_ERRORS.MIN_LENGTH,
    PASSWORD_ERRORS.UPPERCASE,
    PASSWORD_ERRORS.LOWERCASE,
    PASSWORD_ERRORS.NUMBER,
    PASSWORD_ERRORS.SPECIAL_CHAR,
    PASSWORD_ERRORS.SPACES,
  ],
} as const
