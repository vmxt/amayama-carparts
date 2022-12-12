<script setup></script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
      <a
        href="#"
        class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <span
          class="text-xs bg-rose-600 rounded-full text-white px-4 py-1.5 mr-3"
          >New</span
        >
        <span class="text-sm font-medium"
          >Tired of waiting weeks for parts to arrive from Japan?</span
        >
        <svg
          class="ml-2 w-5 h-5"
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
      </a>
      <h1
        class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
      >
        Having trouble with your used Japanese import?
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        We can supply the parts you need with proven reliable service to
        anywhere in the world.
      </p>
      <div class="flex container">
        <img
          class="w-full h-auto hidden lg:block"
          src="@/assets/index/hero_1.jpg"
          draggable="false"
        />
        <img
          class="w-full h-auto hidden lg:block"
          src="@/assets/index/hero_2.jpg"
          draggable="false"
        />
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <h1
        class="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
      >
        Then what?
      </h1>
      <dl
        class="grid max-w-screen-lg gap-2 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white"
      >
        <div class="text-sm flex flex-col items-center">
          <img
            class="hidden md:block"
            src="@/assets/index/cta1_desktop.jpg"
            draggable="false"
          />
          <img
            class="block md:hidden"
            src="@/assets/index/cta1_mobile.jpg"
            draggable="false"
          />
          <dd class="font-light mb-5 text-gray-500 dark:text-gray-400">
            Either add the part number you required to the shopping cart using
            the part number search box above, or if you don't know the part
            numbers, simply describe them using our inquiry form. We supply
            genuine parts for Toyota, Lexus, Nissan, Infiniti, Mitsubishi,
            Honda, Mazda, Subaru, Suzuki.
          </dd>
        </div>
        <div class="text-sm flex flex-col items-center">
          <img
            class="hidden md:block"
            src="@/assets/index/cta2_desktop.jpg"
            draggable="false"
          />
          <img
            class="block md:hidden"
            src="@/assets/index/cta2_mobile.jpg"
            draggable="false"
          />
          <dd class="font-light mb-5 text-gray-500 dark:text-gray-400">
            Once your inquiry has been received, we will make a quote including
            shipping charges. You can adjust shipping details and edit quotes at
            this stage. The quote will appear in your Amayama account usually in
            1 - 2 days. Shipping Calculator.
          </dd>
        </div>
        <div class="text-sm flex flex-col items-center">
          <img
            class="hidden md:block"
            src="@/assets/index/cta3_desktop.jpg"
            draggable="false"
          />
          <img
            class="block md:hidden"
            src="@/assets/index/cta3_mobile.jpg"
            draggable="false"
          />
          <dd class="font-light mb-5 text-gray-500 dark:text-gray-400">
            Once you receive the quote, payment can be made either by Paypal,
            Credit Card or by bank wire transfer. Once payment has been received
            your order will be processed.
          </dd>
        </div>
        <div class="text-sm flex flex-col items-center">
          <img
            class="hidden md:block"
            src="@/assets/index/cta4_desktop.jpg"
            draggable="false"
          />
          <img
            class="block md:hidden"
            src="@/assets/index/cta4_mobile.jpg"
            draggable="false"
          />
          <dd class="font-light mb-5 text-gray-500 dark:text-gray-400">
            That's all there is to it! Your order will arrive in up to 14 days
            from time of payment, depending on your location and shipping method
            chosen. Your inquiries are always welcome and we look forward to
            serving you. Detailed ordering process description.
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
