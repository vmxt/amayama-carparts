<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav
    class="block bg-white relative bg-white border-b border-gray-200 dark:bg-gray-900 shadow-md"
  >
    <div
      class="flex border-gray-200 justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <div class="flex items-center" />
      <div class="flex items-center">
        <router-link
          :to="{ name: 'sign-in' }"
          type="button"
          class="text-md mx-2 underline underline-dotted font-medium text-blue-400 hover:text-rose-800 dark:text-rose-500 hover:underline"
          >Log In</router-link
        >
        <span>or</span>
        <router-link
          :to="{ name: 'sign-up' }"
          type="button"
          class="text-md mx-2 underline underline-dotted font-medium text-blue-400 hover:text-rose-800 dark:text-rose-500 hover:underline"
          >Sign Up</router-link
        >
        <Icon
          icon="material-symbols:shopping-cart-rounded"
          width="20"
          class="mx-2"
        />
        <span class="text-sm">Cart is Empty</span>
      </div>
    </div>
  </nav>
</template>

<style lang=""></style>
