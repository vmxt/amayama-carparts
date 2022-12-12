<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav
    class="mt-5 container flex flex-wrap items-center justify-between mx-auto"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <router-link :to="{ name: 'index' }">
        <p class="font-light hover:underline">Home</p>
      </router-link>
      <li>
        <div aria-current="page" class="flex items-center">
          <svg
            class="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <router-link :to="{ name: 'catalogues' }" class="ml-3">
            <p class="font-bold hover:underline">
              Genuine Online Car Parts Catalogue
            </p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto max-w-screen-xl gap-5 grid grid-cols-2 lg:py-10 lg:px-50"
    >
      <router-link
        :to="{ name: 'toyota' }"
        class="block max-w-sm p-6 text-gray-300 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:toyota" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Toyota
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'nissan' }"
        class="block max-w-sm p-6 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:nissan" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Nissan
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'mitsubishi' }"
        class="block max-w-sm p-6 text-rose-500 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:mitsubishi" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Mitsubishi
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'honda' }"
        class="block max-w-sm p-6 text-gray-300 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:honda" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Honda
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'mazda' }"
        class="block max-w-sm p-6 text-gray-300 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:mazda" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Mazda
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'subaru' }"
        class="block max-w-sm p-6 text-blue-800 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:subaru" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Subaru
        </h5>
      </router-link>

      <router-link
        :to="{ name: 'suzuki' }"
        class="block max-w-sm p-6 text-rose-500 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Icon icon="simple-icons:suzuki" width="50" class="mx-auto" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mx-auto dark:text-white"
        >
          Suzuki
        </h5>
      </router-link>
    </div>
  </section>
</template>
