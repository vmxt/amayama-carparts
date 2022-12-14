<template>
  <div
    class="flex flex-col shadow-xl items-center justify-center px-6 py-8 mx-auto py-15 lg:py-10"
  >
    <div class="px-6 border border-gray-200 rounded-lg w-100 py-6 lg:px-8">
      <h3
        class="mb-4 text-2xl text-center font-bold leading-tight text-gray-900 dark:text-white"
      >
        Welcome to Amayama
      </h3>
      <form class="space-y-6" action="#">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div class="flex justify-end">
          <router-link
            :to="{ name: 'reset-password' }"
            class="text-sm text-blue-400 hover:underline dark:text-blue-400"
            >Forgot your password?</router-link
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <router-link
            :to="{ name: 'sign-up' }"
            class="text-blue-400 hover:underline dark:text-blue-500"
            >Create account</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
