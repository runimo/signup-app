<template>
  <main>
    <nord-stack class="signup" direction="vertical" align-items="center" justify-content="center">
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
  margin: auto;
}

@media (min-width: 768px) {
  .signup {
    width: 50%;
    margin: auto;
    min-height: 100vh;
  }
}

@media (min-width: 1024px) {
  .signup {
    width: 50%;
    margin: auto;
    min-height: 100vh;
  }
}
</style>
