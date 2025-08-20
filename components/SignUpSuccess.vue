<template>
  <div>
    <nord-stack direction="vertical" align-items="center" justify-content="center">
      <nord-icon
        name="interface-checked-circle"
        size="xl"
        color="var(--n-color-status-success)"
      ></nord-icon>
      <h1 class="color-success n-margin-b-xl">Success!</h1>
      <p class="n-font-size-xl">Your account has been successfully created.</p>
    </nord-stack>
    <nord-stack
      class="n-margin-bs-xxl"
      direction="vertical"
      align-items="center"
      justify-content="center"
    >
      <p class="n-font-size-l n-padding-is-m n-margin-auto text-center">
        Log in now to start using the Veterinary Practice Management App.
      </p>
      <nord-button variant="primary">Login</nord-button>
    </nord-stack>
  </div>
</template>

<script setup lang="ts">
import NordButton from '@nordhealth/components/lib/Button'
import NordIcon from '@nordhealth/components/lib/Icon'
import NordStack from '@nordhealth/components/lib/Stack'
</script>

<style scoped>
.color-success {
  color: var(--n-color-status-success);
}

.text-center {
  text-align: center;
}
</style>
