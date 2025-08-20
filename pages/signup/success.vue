<template>
  <div class="n-padding-b-xl success-page">
    <SignUpSuccess />
  </div>
</template>

<script setup lang="ts">
import SignUpSuccess from '../../components/SignUpSuccess.vue'

useHead({
  title: 'Welcome to the Veterinary Practice Management App!',
})
</script>

<style scoped>
.success-page {
  min-height: 100vh;
}
</style>
