const PASSWORD_ERRORS = {
  MIN_LENGTH: 'Please enter at least 8 characters.',
  UPPERCASE: 'Please use at least one uppercase letter.',
  LOWERCASE: 'Please use at least one lowercase letter.',
  NUMBER: 'Please use at least one number.',
  SPECIAL_CHAR: 'Please use at least one special character.',
  SPACES: 'Please do not use spaces.',
}

const usePasswordValidation = (password: string): string[] => {
  const isEmpty = password === ''
  const hasMinimumLength = password.length >= 8
  const containsUpperCaseLetter = /[A-Z]/.test(password)
  const containsLowerCaseLetter = /[a-z]/.test(password)
  const containsNumber = /\d/.test(password)
  // Password needs to contain at least one of these: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
  const containsSpecialChar = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password)
  const containsSpaces = /\s/.test(password)

  const isValid =
    !isEmpty &&
    hasMinimumLength &&
    containsUpperCaseLetter &&
    containsLowerCaseLetter &&
    containsNumber &&
    containsSpecialChar &&
    !containsSpaces
  const errors: string[] = []

  // If password field is empty, skip other conditions
  if (isEmpty) {
    return ['Please enter a password.']
  }

  if (!hasMinimumLength) {
    errors.push(PASSWORD_ERRORS.MIN_LENGTH)
  }

  if (!containsUpperCaseLetter) {
    errors.push(PASSWORD_ERRORS.UPPERCASE)
  }

  if (!containsLowerCaseLetter) {
    errors.push(PASSWORD_ERRORS.LOWERCASE)
  }

  if (!containsNumber) {
    errors.push(PASSWORD_ERRORS.NUMBER)
  }

  if (!containsSpecialChar) {
    errors.push(PASSWORD_ERRORS.SPECIAL_CHAR)
  }

  if (containsSpaces) {
    errors.push(PASSWORD_ERRORS.SPACES)
  }

  return isValid ? [] : errors
}

export default usePasswordValidation
