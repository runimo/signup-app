<template>
  <main>
    <nord-stack
      class="signup n-margin-auto"
      direction="vertical"
      align-items="center"
      justify-content="center"
    >
      <div aria-hidden="true" class="n-margin-be-xl n-font-size-xxl">
        Veterinary Practice Management App
      </div>
      <h1>Sign up to get started</h1>
      <nord-card>
        <slot />
      </nord-card>
    </nord-stack>
  </main>
</template>

<script setup lang="ts">
import NordCard from '@nordhealth/components/lib/Card'
</script>

<style scoped>
.signup {
  width: 100%;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .signup {
    width: 50%;
  }
}
</style>
