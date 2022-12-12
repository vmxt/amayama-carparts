<template>
  <nav
    class="mt-5 container flex flex-wrap items-center justify-between mx-auto"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex mx-5  items-center space-x-1 md:space-x-3">
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
          <router-link :to="{ name: 'help' }" class="ml-3">
            <p class="font-light hover:underline">Help</p>
          </router-link>
        </div>
      </li>
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
          <router-link :to="{ name: 'help-howtobuy' }" class="ml-3">
            <p class="font-bold hover:underline">How to Buy</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <aside
    class="mt-5 px-5 container flex flex-wrap items-center justify-between mx-auto"
  >
    <div
      class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <router-link
        :to="{ name: 'help-internationalshipping' }"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        International Shipping
      </router-link>
      <router-link
        :to="{ name: 'help-warranty' }"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Warranty & Returns
      </router-link>
      <router-link
        :to="{ name: 'help-howtobuy' }"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        How to Buy?
      </router-link>
      <router-link
        :to="{ name: 'help-shippinglimitations' }"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        COVID-19 shipping limitations
      </router-link>
      <router-link
        :to="{ name: 'help-faq' }"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        FAQ
      </router-link>
    </div>
  </aside>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <div
          class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400"
        >
          <h2
            class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            How to make purchase?
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-light">
          Ordering new genuine parts with amayama.com is as simple as buying a
          kettle in regular shop! Please see the step-by-step instructions
          below.
        </p>
        <p class="mb-4 font-bold text-2xl">If you have the part number</p>
        <p class="mb-10 font-light">
          If you don't know the part number — go to the section titled
          <router-link
            :to="{ name: 'help-howtobuy' }"
            class="text-blue-500 hover:underline"
            >"If you don't know the part number"</router-link
          >.
        </p>
        <p class="mb-10 font-light">
          Add the part number to the search form and submit:
        </p>
        <img
          src="@/assets/how-to-buy/b_section1.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          If the part number was found, the part page with its information will
          appear. If a photo is available please check it to be sure this is the
          exact part you require:
        </p>
        <img
          src="@/assets/how-to-buy/b_section2.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Scroll the page slightly down the the Prices section and choose a
          price offer depending on your needs, stock quantity and availability
          period. In this example we choose Hino filter instead of Toyota. When
          original parts from different brands are located in the same table you
          can be sure they are actually the same parts but with different
          labels. In this example you can be sure part Hino 90915-10004 is
          identical to Toyota 90915-10004, so you can choose the cheapest. Press
          "Buy" button to add part to you shopping cart:
        </p>
        <img
          src="@/assets/how-to-buy/b_section3.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Now you are ready to begin the checkout process. Go to your shopping
          cart page:
        </p>
        <img
          src="@/assets/how-to-buy/b_section4.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          To review your order click or tap the "Proceed to checkout" button:
        </p>
        <img
          src="@/assets/how-to-buy/b_section5.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Before proceeding to the checkout you have to login or register. We
          recommend that you use the fastest login method via social media.
          After logging in or registering, enter your shipping and billing
          addresses. After entering those details click or tap the "Continue
          checkout" button:
        </p>
        <img
          src="@/assets/how-to-buy/b_section6.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Choose the shipping method according to its price and shipping
          duration:
        </p>
        <img
          src="@/assets/how-to-buy/b_section7.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Choose order type: Instant or Regular (REquest a Quote). Instant
          orders will be available for payment immediately after checkout
          completion. This is the fastest way to get your parts. Regular order
          type is for cases when you are not sure about the order contents or
          shipping. Regular order acceptance may take 1-5 working days:
        </p>
        <img
          src="@/assets/how-to-buy/b_section8.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />
        <p class="py-10 font-light">
          Review your order contents and agree with our policies. Next, click or
          tap the "Complete checkout" button:
        </p>
        <img
          src="@/assets/how-to-buy/b_section9.jpg"
          class="mx-auto border mt-5 border-gray-500"
          draggable="false"
        />
        <img
          src="@/assets/how-to-buy/b_section10.jpg"
          class="mx-auto mt-5 border border-gray-500"
          draggable="false"
        />

        <p class="py-10 font-light">
          That's all! If you made instant order it will be possible to pay
          immediately after completion:
        </p>
        <img
          src="@/assets/how-to-buy/b_section11.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />

        <h1 class="py-5 font-bold text-3xl">
          If you don't know the part number
        </h1>
        <p class="py-5 font-light">
          Go to the
          <router-link
            :to="{ name: 'catalogues' }"
            class="text-blue-500 hover:underline"
            >Genuine catalogues page</router-link
          >
          and choose the name of the manufacturer of your vehicle:
        </p>
        <img
          src="@/assets/how-to-buy/b_section12.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />

        <p class="py-10 font-light">
          In the search form enter the VIN number of your car. For Japanese
          domestic market cars enter the Frame number instead of a VIN:
        </p>
        <img
          src="@/assets/how-to-buy/b_section13.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />

        <p class="py-10 font-light">
          You will arrive at our partner's catalogue main page for your vehicle.
          Choose the part you need from the part groups:
        </p>

        <img
          src="@/assets/how-to-buy/b_section14.jpg"
          class="mx-auto border my-10 border-gray-500"
          draggable="false"
        />

        <img
          src="@/assets/how-to-buy/b_section15.jpg"
          class="mx-auto border my-10 border-gray-500"
          draggable="false"
        />

        <img
          src="@/assets/how-to-buy/b_section16.jpg"
          class="mx-auto border my-10 border-gray-500"
          draggable="false"
        />

        <p class="py-10 font-light">
          You will see the applicable list of parts and approximate prices.
          Clink on the link with prices:
        </p>
        <img
          src="@/assets/how-to-buy/b_section17.jpg"
          class="mx-auto border border-gray-500"
          draggable="false"
        />

        <p class="pt-5 font-bold text-3xl">I'm not sure which part I need</p>
        <p class="pt-5 font-light">
          Feel free to make an
          <router-link
            :to="{ name: 'inquiry' }"
            class="text-blue-500 hover:underline font-semibold"
            >inquiry</router-link
          >
          where you can describe all your needs. We are always glad to hear from
          you!
        </p>
      </div>
    </div>
  </section>
</template>
