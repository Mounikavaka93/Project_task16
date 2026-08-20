const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export function validateEmail(email) {
  const value = email.trim()

  if (!value) return 'Email is required.'
  if (value.length > 80) return 'Email must be 80 characters or fewer.'
  if (value.includes(' ')) return 'Email cannot contain spaces.'
  if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address, like you@company.com.'

  return ''
}

export function getPasswordChecks(password) {
  return [
    { id: 'length', label: 'At least 8 characters', met: password.length >= 8 },
    { id: 'upper', label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { id: 'lower', label: 'One lowercase letter', met: /[a-z]/.test(password) },
    { id: 'number', label: 'One number', met: /\d/.test(password) },
    { id: 'space', label: 'No spaces', met: password.length > 0 && !/\s/.test(password) },
  ]
}

export function validatePassword(password) {
  if (!password) return 'Password is required.'
  if (password.length > 64) return 'Password must be 64 characters or fewer.'

  const unmet = getPasswordChecks(password).find((check) => !check.met)
  if (unmet) {
    if (unmet.id === 'space') return 'Password cannot contain spaces.'
    return `Password must include ${unmet.label.toLowerCase()}.`
  }

  return ''
}

export function validateName(name) {
  const value = name.trim()

  if (!value) return 'Full name is required.'
  if (value.length < 2) return 'Enter at least 2 characters.'
  if (value.length > 50) return 'Name must be 50 characters or fewer.'
  if (!/^[A-Za-z][A-Za-z .'-]*$/.test(value)) {
    return 'Use letters, spaces, hyphens, or apostrophes only.'
  }

  return ''
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return 'Confirm your password.'
  if (confirmPassword !== password) return 'Passwords do not match.'
  return ''
}

export function validateTerms(accepted) {
  return accepted ? '' : 'Please accept the terms to create an account.'
}

export function validateSignIn({ email, password }) {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  }
}

export function validateCreateAccount({ name, email, password, confirmPassword, terms }) {
  return {
    name: validateName(name),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
    terms: validateTerms(terms),
  }
}

export function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}
