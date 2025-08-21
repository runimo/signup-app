<template>
  <form method="post" @submit.prevent="submit">
    <nord-stack>
      <nord-fieldset hide-label label="Account information">
        <nord-stack>
          <nord-input
            ref="emailInput"
            v-model="formData.email"
            :aria-describedby="errors.email.length > 0 ? 'email-errors' : undefined"
            :aria-invalid="errors.email.length > 0 ? true : undefined"
            expand
            name="email"
            label="Email Address"
            placeholder="user@example.com"
            required
            type="email"
          >
            <div v-if="errors.email.length > 0" id="email-error" slot="error">
              <p>{{ errors.email[0] }}</p>
            </div>
          </nord-input>
          <nord-input
            ref="passwordInput"
            v-model="formData.password"
            :aria-describedby="errors.password.length > 0 ? 'password-errors' : undefined"
            :aria-invalid="errors.password.length > 0 ? true : undefined"
            auto-complete="new-password"
            expand
            name="password"
            label="Password"
            placeholder="••••••••"
            required
            :type="showPassword ? 'text' : 'password'"
          >
            <div v-if="errors.password.length > 0" id="password-errors" slot="error">
              <p v-for="(error, index) in errors.password" :key="index">{{ error }}</p>
            </div>
            <nord-button slot="end" square type="button" @click="togglePasswordVisibility">
              <nord-icon
                :name="showPassword ? 'interface-edit-on' : 'interface-edit-off'"
              ></nord-icon>
              <nord-visually-hidden>
                {{ showPassword ? 'Hide password' : 'Show password' }}
              </nord-visually-hidden>
            </nord-button>
          </nord-input>
        </nord-stack>
        <nord-checkbox
          v-model="formData.newsletter"
          class="n-margin-bs-xl"
          label="I’d like to receive occasional product updates and announcements"
          name="newsletter"
          type="checkbox"
        ></nord-checkbox>
      </nord-fieldset>
      <nord-button expand type="submit" variant="primary">Sign Up</nord-button>
    </nord-stack>
  </form>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app'
import NordButton from '@nordhealth/components/lib/Button'
import NordCheckbox from '@nordhealth/components/lib/Checkbox'
import NordFieldset from '@nordhealth/components/lib/Fieldset'
import NordIcon from '@nordhealth/components/lib/Icon'
import NordInput from '@nordhealth/components/lib/Input'
import NordStack from '@nordhealth/components/lib/Stack'
import NordVisuallyHidden from '@nordhealth/components/lib/VisuallyHidden'
import { ref } from 'vue'
import usePasswordValidation from '../composables/usePasswordValidation'
import useEmailValidation from '../composables/useEmailAddressValidation'

interface FormData {
  email: string
  password: string
  newsletter: boolean
}

const formData = ref<FormData>({
  email: '',
  password: '',
  newsletter: false,
})

const emailInput = ref<HTMLInputElement | null>(null)
const passwordInput = ref<HTMLInputElement | null>(null)

const submit = async (): Promise<void> => {
  handleValidation()
  const hasEmailError = errors.value.email.length > 0
  const hasPasswordError = errors.value.password.length > 0
  const hasErrors = hasEmailError || hasPasswordError

  if (hasEmailError) {
    emailInput.value?.focus()
  } else if (hasPasswordError) {
    passwordInput.value?.focus()
  }

  if (!hasErrors) {
    await navigateTo('/signup/success')
  }
}

// Validation
interface FormErrors {
  email: string[]
  password: string[]
}

const errors = ref<FormErrors>({
  email: [],
  password: [],
})

const validatePassword = usePasswordValidation
const validateEmailAddress = useEmailValidation

const handleValidation = (): void => {
  errors.value.password = validatePassword(formData.value.password)
  errors.value.email = validateEmailAddress(formData.value.email)
}

// Password visibility toggle
const showPassword = ref(false)

const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}
</script>
