import { beforeEach, describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import SignupForm from '../../components/SignUpForm.vue'
import useEmailAddressValidation from '../../composables/useEmailAddressValidation'
import usePasswordValidation from '../../composables/usePasswordValidation'
import { navigateTo } from 'nuxt/app'

vi.mock('../../composables/usePasswordValidation', () => ({
  default: vi.fn(() => []),
}))

vi.mock('../../composables/useEmailAddressValidation', () => ({
  default: vi.fn(() => []),
}))

vi.mock('nuxt/app', () => ({
  navigateTo: vi.fn(),
}))

interface SignupFormVM {
  formData: {
    email: string
    password: string
    newsletter: boolean
  }
  errors: {
    email: string[]
    password: string[]
  }
  showPassword: boolean
  togglePasswordVisibility: () => void
  submit: () => Promise<void>
}

describe('SignupForm', () => {
  let wrapper: VueWrapper<InstanceType<typeof SignupForm>>

  beforeEach(() => {
    vi.clearAllMocks()
    wrapper = shallowMount(SignupForm)
  })

  it('has correct initial state', () => {
    const vm = wrapper.vm as unknown as SignupFormVM

    expect(vm.formData).toEqual({
      email: '',
      password: '',
      newsletter: false,
    })
    expect(vm.showPassword).toBe(false)
    expect(vm.errors).toEqual({ email: [], password: [] })
  })

  it('toggles password visibility', () => {
    const vm = wrapper.vm as unknown as SignupFormVM

    expect(vm.showPassword).toBe(false)
    vm.togglePasswordVisibility()
    expect(vm.showPassword).toBe(true)
    vm.togglePasswordVisibility()
    expect(vm.showPassword).toBe(false)
  })

  it('submits the form and navigates if there are no errors', async () => {
    const vm = wrapper.vm as unknown as SignupFormVM
    vm.formData.email = 'user@example.com'
    vm.formData.password = 'Valid123!'

    await vm.submit()

    expect(navigateTo).toHaveBeenCalledWith('/signup/success')
  })

  it('does not navigate if there are errors', async () => {
    const vm = wrapper.vm as unknown as SignupFormVM
    vi.mocked(useEmailAddressValidation).mockReturnValue(['invalid email'])
    vi.mocked(usePasswordValidation).mockReturnValue(['too short'])
    vm.formData.email = 'user@'
    vm.formData.password = 'abc2)'

    await vm.submit()

    expect(useEmailAddressValidation).toHaveBeenCalledWith('user@')
    expect(usePasswordValidation).toHaveBeenCalledWith('abc2)')
    expect(navigateTo).not.toHaveBeenCalled()
  })
})
