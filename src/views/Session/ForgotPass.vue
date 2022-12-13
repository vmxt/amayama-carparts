<template>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto py-15 lg:py-10"
  >
    <h1
      class="text-xl font-bold leading-tight py-5 tracking-tight text-gray-900 md:text-2xl dark:text-white"
    >
      Reset Password
    </h1>
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              for="reset-email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your Email</label
            >
            <input
              type="reset-email"
              name="reset-email"
              id="reset-email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
