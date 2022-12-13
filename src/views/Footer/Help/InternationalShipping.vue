<template>
  <nav
    class="mt-5 container flex flex-wrap items-center justify-between mx-auto"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex mx-5 items-center space-x-1 md:space-x-3">
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
          <router-link
            :to="{ name: 'help-internationalshipping' }"
            class="ml-3"
          >
            <p class="font-bold hover:underline">International Shipping</p>
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
            International Shipping
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-medium">Disclaimer of liability</p>
        <p class="mb-10 font-light">
          Amayama Trading is not responsible for any import tax, duties or other
          charges due to import laws at the destination country. The customer is
          fully responsible to comply with and pay any local import taxes,
          customs charges or any additional payments required thereafter. Please
          contact your local postal service or customs office to consult about
          import rules and limitations before making payment. Amayama Trading
          will not refund any unexpected shipping charges, any fees, taxes or
          duties required for customs clearance. Please note that Amayama
          Trading will not refund payments if orders are returned due to being
          rejected by customs officials at the destination country.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-10 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Parcel Limitations
        </h2>
        <p class="mb-4 text-2xl font-medium">Japan</p>
        <p class="mb-4 font-light">
          The most popular international parcel service is EMS. EMS limits the
          maximum parcel weight about 30 kgs (it can deviate for some
          countries). Also, there are items prohibited for shipping or can not
          be shipped: oversized items, flammables, liquids, explosives,
          pressured gases. This is why we can not ship by EMS large glasses,
          airbags, long metal fuel tubes shocks absorbers, large glasses and
          large body parts (doors, front and read bumpers etc). Please ask our
          managers before ordering if you are not sure about part shipping
          possibility.
        </p>
        <p class="mb-10 font-light">
          By the way, shock absorbers can be shipped by FedEx.
        </p>
        <p class="mb-4 font-light">
          Parcels addressed to Crimea and Sevastopol can not be paid and
          shipped.
        </p>
        <p class="mb-10 font-semibold">
          For shippings from Japan please check suspensions here:
          <a
            target="#"
            class="text-blue-500 hover:underline"
            href="http://www.post.japanpost.jp/int/information/no_delivery_en.html"
            >http://www.post.japanpost.jp/int/information/no_delivery_en.html</a
          >
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-10 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Duties And Taxes
        </h2>
        <p class="mb-4 font-light">
          Every country has its own taxation laws and many of them has
          tax/duty-free thresholds for parcels for personal usage, where
          additional costs are not charged. Following list is a short info for
          some countries. If your country is not presented here please ask
          google, postal office or customs to check import rules of your
          country.
        </p>

        <p class="mb-4 text-2xl font-medium">USA</p>
        <p class="mb-4 font-light">Duty-free parcels up to 200 USD</p>
        <p class="mb-4 font-light">
          Simplified duty charge for parcels up to 2000 USD
        </p>
        <p class="mb-4 font-light">
          Parcels with price 200 USD or lower are duty-free. From 200 USD to
          2000 USD duty will be charged, but with simplified procedure. You will
          need to pay duty at postal office. Parcels over 2000 USD require to
          fill many forms or to hire a broker.
        </p>
        <p class="mb-4 font-light">
          More info:
          <a
            href="https://www.cbp.gov/trade/basic-import-export/internet-purchases"
            target="#"
            class="text-blue-500 font-semibold hover:underline"
            >https://www.cbp.gov/trade/basic-import-export/internet-purchases</a
          >
        </p>

        <p class="mb-4 text-2xl font-medium">Australia</p>
        <p class="mb-4 font-light">
          Goods with a value of under AUD 1000.00 From 1 July 2018, the Goods
          and Services Tax (GST) may be collected by overseas vendors of such
          low value goods when imported from overseas by consumers in Australia.
          GST will be charged at the point of sale and not at the border.
        </p>
        <p class="mb-10 font-semibold">
          More info:
          <a
            target="#"
            class="text-blue-500 hover:underline"
            href="https://www.tks.ru/nat/0020000001"
            >https://www.tks.ru/nat/0020000001</a
          >
        </p>

        <p class="mb-4 text-2xl font-medium">United Kingdom</p>
        <p class="mb-4 font-light">VAT 20% for parcels over 15 GBP</p>
        <p class="mb-4 font-light">Duty-free parcels up to 135 GBP</p>
        <p class="mb-10 font-semibold">
          More info:
          <a
            target="#"
            class="text-blue-500 hover:underline"
            href="https://www.gov.uk/goods-sent-from-abroad/tax-and-duty"
            >https://www.gov.uk/goods-sent-from-abroad/tax-and-duty</a
          >
        </p>

        <p class="mb-4 text-2xl font-medium">Germany</p>
        <p class="mb-4 font-light">VAT 19% for parcels over 22 EUR</p>
        <p class="mb-4 font-light">Duty-free parcels up to 150 Евро</p>
        <p class="mb-10 font-semibold">
          More info:
          <a
            target="#"
            class="text-blue-500 hover:underline"
            href="http://ec.europa.eu/taxation_customs/common/buying_online/buying_goods/within_non_eu_en.htm"
            >http://ec.europa.eu/taxation_customs/common/buying_online/buying_goods/within_non_eu_en.htm</a
          >
        </p>

        <p class="mb-4 text-2xl font-medium">Trinidad and Tabago</p>
        <p class="mb-4 font-light">No duty or tax free thresholds.</p>
        <p class="mb-10 font-semibold">
          More info:
          <a
            target="#"
            class="text-blue-500 hover:underline"
            href="https://customs.gov.tt/importing"
            >http://www.customs.gov.tt/importing</a
          >
        </p>
      </div>
    </div>
  </section>
</template>
