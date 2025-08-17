<template>
  <SignUpForm />
</template>

<script setup lang="ts">
import SignUpForm from '../components/SignUpForm.vue'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'signup',
  title: 'Sign Up',
})
</script>
