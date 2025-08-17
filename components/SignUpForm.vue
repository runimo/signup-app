<template>
  <form method="post" @input="updateFormData" @submit.prevent="submit">
    <nord-stack>
      <nord-fieldset hide-label label="Sign Up">
        <nord-stack>
          <nord-input expand name="email" label="Email Address" required type="email"></nord-input>
          <nord-input expand name="password" label="Password" required type="password"></nord-input>
        </nord-stack>
      </nord-fieldset>
      <nord-button expand type="submit" variant="primary">Sign Up</nord-button>
    </nord-stack>
  </form>
</template>

<script setup lang="ts">
import NordButton from '@nordhealth/components/lib/Button'
import NordFieldset from '@nordhealth/components/lib/Fieldset'
import NordInput from '@nordhealth/components/lib/Input'
import NordStack from '@nordhealth/components/lib/Stack'
import { navigateTo } from '#app'
import { ref } from 'vue'

interface FormData {
  email: string
  password: string
}

const formData = ref<FormData>({
  email: '',
  password: '',
})

const updateFormData = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const name = target.name as keyof FormData

  formData.value[name] = target.value
}

const submit = async (): Promise<void> => {
  await navigateTo('/signup/success')
}
</script>

<style scoped>
.main-heading {
  text-align: center;
  font-weight: 300;
  font-size: 1.4rem;
}

.product-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
