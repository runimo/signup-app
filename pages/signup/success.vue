<template>
  <main class="n-padding-b-xl min-h-screen">
    <SignUpSuccess />
  </main>
</template>

<script setup lang="ts">
import SignUpSuccess from '../../components/SignUpSuccess.vue'

useHead({
  title: 'Sign up successful - Welcome to the Veterinary Practice Management App!',
})
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
