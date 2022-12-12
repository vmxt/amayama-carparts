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
          <router-link :to="{ name: 'notation' }" class="ml-3">
            <p class="font-bold hover:underline">特定商取引法に基づく表記</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <div
          class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400"
        >
          <h2
            class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            特定商取引法に基づく表記
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-medium">Date of establishment: November 1, 2004.</p>
        <p class="mb-10 font-light">
          Amayama Trading Co., Ltd supplies new OEM (genuine) parts for cars
          manufactured by Japanese automakers and ships parts worldwide with
          fast delivery and reasonable cost to the client. The company
          specializes in supplying parts for Japanese domestic market (JDM)
          models exported from Japan to destinations around the world: Toyota,
          Lexus, Nissan, Infiniti, Mitsubishi, Honda, Mazda, Subaru, Suzuki. We
          understand the difficulties in dealing with local parts suppliers when
          it comes to JDM models and we strive to make the acquisition of the
          desired parts as easy as possible. Amayama Trading Co. Ltd is located
          in Mino City, in northern Osaka, Japan and has direct contact with all
          Japanese automakers, so you can be sure that your parts are genuine
          OEM items and maintain your vehicles original performance and function
          as the manufacturer intended.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-10 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Warehouse Locations
        </h2>
        <p class="mb-4 text-2xl font-medium">Japan</p>
        <p class="mb-4 font-light">
          Amayama Trading Co., Ltd can supply general parts for all Japanese
          makes, either supplied from the manufacturer or from stock on hand in
          the warehouse. The warehouse is capable of handling large sea or air
          freight orders, right down to single part small packages.
        </p>
        <p class="mb-10 font-light">
          Amayama Trading Co., Ltd 562-0031 Osaka, Mino-shi, Onoharahigashi
          4-22-3 Storehouse Kita-no-mori Ph: 050-3786-7884
        </p>

        <p class="mb-4 text-2xl font-medium">Australia</p>
        <p class="mb-4 font-light">
          Amayama's Australian branch was originally established in 2010 as a
          transit warehouse for all Australian orders. Now trading as Amayama
          Australia Pty Ltd, houses 1000's of parts for Australian customers and
          those wishing to purchase stock on hand from abroad. Amayama Australia
          also has in stock Denso brand spark plugs and cabin air filters which
          are the highest quality at very competitive prices.
        </p>
        <p class="mb-10 font-light">
          Amayama Trading Co., Ltd Amayama Australia Pty Ltd. Unit 11, 22 - 24
          Norman Street, Peakhurst, Sydney, NSW, 2210.
        </p>

        <p class="mb-4 text-2xl font-medium">UAE</p>
        <p class="mb-4 font-light">
          Amayama's UAE branch trading as Dekada Trading FZE can supply general
          part numbers for Japanese and Korean cars but also specializes in
          supplying LHD (left hand drive) parts for markets such as North
          America and Europe. If parts cannot be supplied from Japan, our UAE
          branch may be able to supply them. We also have a growing amount of
          stock on hand in the Dubai warehouse to facilitate fast delivery of
          parts.
        </p>
        <p class="mb-10 font-light">
          Dekada Trading FZE UAE, Sharjah, SAIF Zone, Q1-06-078/C, P.O.Box
          122534 Ph: +97165528270 TRN: 100388007500003
        </p>
      </div>
    </div>
  </section>
</template>
