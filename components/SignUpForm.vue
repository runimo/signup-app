<template>
  <form method="post" @submit.prevent="submit">
    <nord-stack>
      <nord-fieldset hide-label label="Sign Up">
        <nord-stack>
          <nord-input
            v-model="formData.email"
            expand
            :error="errors.email[0]"
            name="email"
            label="Email Address"
            placeholder="user@example.com"
            required
            type="email"
          ></nord-input>
          <nord-input
            v-model="formData.password"
            auto-complete="new-password"
            expand
            name="password"
            label="Password"
            placeholder="••••••••"
            required
            :type="showPassword ? 'text' : 'password'"
          >
            <div v-if="errors.password.length > 0" slot="error">
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
          :checked="formData.newsletter"
          class="newsletter"
          label="I’d like to receive occasional product updates and announcements"
          name="newsletter"
          @change="updateNewsletterSubscription"
        ></nord-checkbox>
      </nord-fieldset>
      <nord-button expand type="submit" variant="primary">Sign Up</nord-button>
    </nord-stack>
  </form>
</template>

<script setup lang="ts">
import { navigateTo } from '#app'
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

const updateNewsletterSubscription = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const value = target.checked

  formData.value.newsletter = value as boolean
}

const submit = async (): Promise<void> => {
  handleValidation()
  const hasErrors = errors.value.email.length > 0 || errors.value.password.length > 0

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

<style scoped>
.newsletter {
  margin-top: 2rem;
}
</style>
