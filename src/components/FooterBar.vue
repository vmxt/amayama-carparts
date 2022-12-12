<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<template>
  <footer
    class="relative w-full bottom-0 left-0 p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800"
  >
    <div class="mx-auto max-w-screen-xl text-center">
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-500 dark:text-white"
      >
        <router-link @click="scrollToTop" :to="{ name: 'shipping' }">
          <p class="mr-4 hover:underline md:mr-6">Shipping Calculator</p>
        </router-link>
        <router-link @click="scrollToTop" :to="{ name: 'about' }">
          <p class="mr-4 hover:underline md:mr-6">About us</p>
        </router-link>
        <router-link @click="scrollToTop" :to="{ name: 'privacy' }">
          <p class="mr-4 hover:underline md:mr-6">Privacy Policy</p>
        </router-link>
        <router-link @click="scrollToTop" :to="{ name: 'terms' }">
          <p class="mr-4 hover:underline md:mr-6">Terms of Use</p>
        </router-link>
        <router-link @click="scrollToTop" :to="{ name: 'help' }">
          <p class="mr-4 hover:underline md:mr-6">Help</p>
        </router-link>
        <router-link @click="scrollToTop" :to="{ name: 'notation' }">
          <p class="mr-4 hover:underline md:mr-6">特定商取引法に基づく表記</p>
        </router-link>
        <li>
          <a
            href="https://www.facebook.com/AmayamaTrading/"
            target="_blank"
            class="mr-4 hover:underline md:mr-6"
            >Facebook</a
          >
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2004-{{ new Date().getFullYear() }}. Amayama Trading Co., Ltd.</span
      >
    </div>
  </footer>
</template>
