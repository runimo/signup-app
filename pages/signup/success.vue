<template>
  <div class="n-padding-b-xl success-page">
    <nord-stack direction="vertical" align-items="center" justify-content="center">
      <nord-icon
        name="interface-checked-circle"
        size="xl"
        color="var(--n-color-status-success)"
      ></nord-icon>
      <h1 class="color-success n-margin-b-xl">Success!</h1>
      <p class="n-font-size-xl">Your account has been successfully created.</p>
    </nord-stack>
    <nord-stack class="n-margin-bs-xxl" direction="vertical" align-items="center">
      <p class="n-font-size-l">Log in now to start using the Veterinary Practice Management App.</p>
      <nord-button variant="primary">Login</nord-button>
    </nord-stack>
  </div>
</template>

<script setup lang="ts">
import NordButton from '@nordhealth/components/lib/Button'
import NordIcon from '@nordhealth/components/lib/Icon'
import NordStack from '@nordhealth/components/lib/Stack'

useHead({
  title: 'Welcome to the Veterinary Practice Management App!',
})
</script>

<style scoped>
.success-page {
  min-height: 100vh;
}
.color-success {
  color: var(--n-color-status-success);
}
</style>
