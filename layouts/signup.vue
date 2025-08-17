<template>
  <main>
    <nord-stack class="signup" direction="vertical" align-items="center" justify-content="center">
      <div class="product-title">Veterinary Practice Management App</div>
      <h1 class="main-heading">Sign up to get started</h1>
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
