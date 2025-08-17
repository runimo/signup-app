import { defineNuxtRouteMiddleware } from '#app'
import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'

export default defineNuxtRouteMiddleware(
  (
    to: RouteLocationNormalized,
  ): string | RouteLocationRaw | Promise<string | RouteLocationRaw> | undefined => {
    if (to.path === '/') {
      return '/signup'
    }
  },
)
