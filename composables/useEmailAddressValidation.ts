const useEmailAddressValidation = (emailAddress: string): string[] => {
  const isEmpty = emailAddress === ''

  // If email address field is empty, skip other conditions
  if (isEmpty) {
    return ['Please enter an email address, e.g. user@example.com.']
  }

  /**
   * Part before the @ - can include letters, numbers, underscores, dots, hyphens,
   * and the special characters ! # $ % & ' * + / = ? ^ ` { | } ~
   */
  const localPart = "[\\w.!#$%&'*+/=?^`{|}~-]+"

  // Part after the @, before the dot (if existent) - can include letters, numbers, and hyphens
  const domainLabel = '[a-z\\d](?:[a-z\\d-]{0,61}[a-z\\d])?'

  // Part after the @, before and after the dot - can include letters, numbers, and hyphens
  const domain = `${domainLabel}(?:\\.${domainLabel})*`

  const EMAIL_REGEX = new RegExp(`^${localPart}@${domain}$`, 'i')

  return EMAIL_REGEX.test(emailAddress)
    ? []
    : ['Please enter a valid email address, e.g. user@example.com.']
}

export default useEmailAddressValidation
