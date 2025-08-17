<template>
  <nord-stack>
    <div class="product-title">Veterinary Practice Management App</div>
    <h1 class="main-heading">Sign up to get started</h1>
    <form>
      <nord-stack>
        <nord-fieldset hide-label label="Sign Up">
          <nord-stack>
            <nord-input
              expand
              name="email"
              label="Email Address"
              required
              type="email"
            ></nord-input>
            <nord-input
              expand
              name="password"
              label="Password"
              required
              type="password"
            ></nord-input>
          </nord-stack>
        </nord-fieldset>
        <nord-button expand type="submit" variant="primary">Sign Up</nord-button>
      </nord-stack>
    </form>
  </nord-stack>
</template>

<script setup lang="ts">
import NordButton from '@nordhealth/components/lib/Button'
import NordFieldset from '@nordhealth/components/lib/Fieldset'
import NordInput from '@nordhealth/components/lib/Input'
import NordStack from '@nordhealth/components/lib/Stack'
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
