<template>
  <SignUpForm />
</template>

<script setup lang="ts">
import SignUpForm from '../../components/SignUpForm.vue'

definePageMeta({
  layout: 'signup',
})

useHead({
  title: 'Sign Up - Veterinary Practice Management App',
})
</script>
