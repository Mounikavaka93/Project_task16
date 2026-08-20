import { useEffect, useId, useRef, useState } from 'react'
import { Check, CircleAlert, Eye, EyeOff, Lock, Mail, User, X } from 'lucide-react'
import Button from './ui/Button'
import Logo from './ui/Logo'
import {
  getPasswordChecks,
  hasErrors,
  validateConfirmPassword,
  validateCreateAccount,
  validateEmail,
  validateName,
  validatePassword,
  validateSignIn,
  validateTerms,
} from '../utils/validation'

const inputClass =
  'w-full rounded-xl border-0 bg-sand-50 py-2.5 text-sm text-forest-950 outline-none ring-1 transition focus:ring-2'
const inputOk = 'ring-forest-900/10 focus:ring-forest-700'
const inputErr = 'ring-red-400 focus:ring-red-500'

const emptyForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
}

const emptyErrors = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: '',
}

function fieldError(name, value, form) {
  if (name === 'name') return validateName(value)
  if (name === 'email') return validateEmail(value)
  if (name === 'password') return validatePassword(value)
  if (name === 'confirmPassword') return validateConfirmPassword(form.password, value)
  if (name === 'terms') return validateTerms(value)
  return ''
}

export default function SignIn({ open, onClose, initialMode = 'signin' }) {
  const emailId = useId()
  const passwordId = useId()
  const nameId = useId()
  const confirmId = useId()
  const termsId = useId()
  const firstFieldRef = useRef(null)
  const [mode, setMode] = useState(initialMode)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState(emptyErrors)
  const [touched, setTouched] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const isCreate = mode === 'signup'

  useEffect(() => {
    if (!open) return undefined

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 40)

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, mode])

  useEffect(() => {
    if (!open) {
      setForm(emptyForm)
      setErrors(emptyErrors)
      setTouched({})
      setShowPassword(false)
      setShowConfirm(false)
      setSubmitting(false)
      setSuccess(false)
      return
    }

    setMode(initialMode)
    setSuccess(false)
    setErrors(emptyErrors)
    setTouched({})
  }, [open, initialMode])

  if (!open) return null

  const passwordChecks = getPasswordChecks(form.password)
  const showChecks = Boolean(touched.password) || form.password.length > 0

  const setField = (name, value) => {
    const nextForm = { ...form, [name]: value }
    setForm(nextForm)

    setErrors((current) => {
      const next = { ...current }
      if (touched[name]) next[name] = fieldError(name, value, nextForm)
      if (name === 'password' && touched.confirmPassword) {
        next.confirmPassword = validateConfirmPassword(value, nextForm.confirmPassword)
      }
      return next
    })
  }

  const onBlur = (name) => {
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors((current) => ({
      ...current,
      [name]: fieldError(name, form[name], form),
    }))
  }

  const switchMode = (nextMode) => {
    setMode(nextMode)
    setSuccess(false)
    setSubmitting(false)
    setErrors(emptyErrors)
    setTouched({})
    setForm((current) => ({
      ...emptyForm,
      email: current.email,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = isCreate ? validateCreateAccount(form) : validateSignIn(form)
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    })
    setErrors({ ...emptyErrors, ...nextErrors })

    if (hasErrors(nextErrors)) {
      firstFieldRef.current?.focus()
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 700)
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 sm:px-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-forest-950/55 backdrop-blur-sm transition"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="relative z-10 w-full max-h-[90vh] max-w-md overflow-y-auto overflow-x-hidden rounded-[1.75rem] bg-white shadow-2xl ring-1 ring-forest-900/10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-forest-800 transition hover:bg-sand-100"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-6 pb-7 pt-8 sm:px-8">
          <Logo onClick={(event) => event.preventDefault()} />
          <h2 id="auth-title" className="mt-5 font-display text-2xl font-semibold text-forest-950">
            {isCreate ? 'Create your account' : 'Sign in to Verdant'}
          </h2>
          <p className="mt-1.5 text-sm text-forest-800/70">
            {isCreate
              ? 'Start a free workspace with your work email. No credit card required.'
              : 'Use your work email and a strong password to open your workspace.'}
          </p>

          {success ? (
            <div className="mt-8 rounded-2xl bg-forest-50 px-4 py-6 text-center ring-1 ring-forest-200">
              <p className="font-display text-xl font-semibold text-forest-950">
                {isCreate ? 'Account created' : 'Welcome back'}
              </p>
              <p className="mt-2 text-sm text-forest-800/70">
                {isCreate ? 'Your Verdant workspace is ready for ' : 'You are signed in as '}
                <span className="font-semibold">{form.email.trim()}</span>.
              </p>
              <Button className="mt-5" onClick={onClose}>
                Continue
              </Button>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              {isCreate ? (
                <div>
                  <label htmlFor={nameId} className="text-sm font-medium text-forest-900">
                    Full name
                  </label>
                  <div className="relative mt-1.5">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/45" />
                    <input
                      ref={firstFieldRef}
                      id={nameId}
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => setField('name', event.target.value)}
                      onBlur={() => onBlur('name')}
                      aria-invalid={Boolean(errors.name)}
                      className={`${inputClass} ${errors.name ? inputErr : inputOk} pl-10 pr-3.5`}
                      placeholder="Jordan Hale"
                    />
                  </div>
                  {errors.name ? (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <CircleAlert className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div>
                <label htmlFor={emailId} className="text-sm font-medium text-forest-900">
                  Work email
                </label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/45" />
                  <input
                    ref={isCreate ? undefined : firstFieldRef}
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => setField('email', event.target.value)}
                    onBlur={() => onBlur('email')}
                    aria-invalid={Boolean(errors.email)}
                    className={`${inputClass} ${errors.email ? inputErr : inputOk} pl-10 pr-3.5`}
                    placeholder="you@company.com"
                  />
                </div>
                {errors.email ? (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                    <CircleAlert className="h-3.5 w-3.5" />
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={passwordId} className="text-sm font-medium text-forest-900">
                  Password
                </label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/45" />
                  <input
                    id={passwordId}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={isCreate ? 'new-password' : 'current-password'}
                    value={form.password}
                    onChange={(event) => setField('password', event.target.value)}
                    onBlur={() => onBlur('password')}
                    aria-invalid={Boolean(errors.password)}
                    className={`${inputClass} ${errors.password ? inputErr : inputOk} px-10`}
                    placeholder={isCreate ? 'Create a strong password' : 'Enter your password'}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-800/55 transition hover:text-forest-800"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password ? (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                    <CircleAlert className="h-3.5 w-3.5" />
                    {errors.password}
                  </p>
                ) : null}

                <ul className="mt-3 grid gap-1.5">
                  {passwordChecks.map((check) => (
                    <li
                      key={check.id}
                      className={`flex items-center gap-2 text-xs ${
                        showChecks && check.met ? 'text-forest-700' : 'text-forest-800/50'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={showChecks && check.met ? 2.6 : 1.8} />
                      {check.label}
                    </li>
                  ))}
                </ul>
              </div>

              {isCreate ? (
                <>
                  <div>
                    <label htmlFor={confirmId} className="text-sm font-medium text-forest-900">
                      Confirm password
                    </label>
                    <div className="relative mt-1.5">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-800/45" />
                      <input
                        id={confirmId}
                        name="confirmPassword"
                        type={showConfirm ? 'text' : 'password'}
                        autoComplete="new-password"
                        value={form.confirmPassword}
                        onChange={(event) => setField('confirmPassword', event.target.value)}
                        onBlur={() => onBlur('confirmPassword')}
                        aria-invalid={Boolean(errors.confirmPassword)}
                        className={`${inputClass} ${errors.confirmPassword ? inputErr : inputOk} px-10`}
                        placeholder="Re-enter your password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-800/55 transition hover:text-forest-800"
                        onClick={() => setShowConfirm((value) => !value)}
                        aria-label={showConfirm ? 'Hide password' : 'Show password'}
                      >
                        {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword ? (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <CircleAlert className="h-3.5 w-3.5" />
                        {errors.confirmPassword}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor={termsId} className="flex items-start gap-2.5 text-sm text-forest-800/80">
                      <input
                        id={termsId}
                        type="checkbox"
                        checked={form.terms}
                        onChange={(event) => setField('terms', event.target.checked)}
                        onBlur={() => onBlur('terms')}
                        className="mt-0.5 h-4 w-4 rounded border-forest-300 text-forest-800 accent-forest-800"
                      />
                      <span>
                        I agree to the Terms of Service and Privacy Policy.
                      </span>
                    </label>
                    {errors.terms ? (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <CircleAlert className="h-3.5 w-3.5" />
                        {errors.terms}
                      </p>
                    ) : null}
                  </div>
                </>
              ) : null}

              <Button type="submit" className="mt-2 w-full" disabled={submitting}>
                {submitting
                  ? isCreate
                    ? 'Creating account…'
                    : 'Signing in…'
                  : isCreate
                    ? 'Create account'
                    : 'Sign in'}
              </Button>

              <p className="pt-1 text-center text-sm text-forest-800/70">
                {isCreate ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  className="font-semibold text-forest-800 underline-offset-2 transition hover:text-forest-600 hover:underline"
                  onClick={() => switchMode(isCreate ? 'signin' : 'signup')}
                >
                  {isCreate ? 'Sign in' : 'Create account'}
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
