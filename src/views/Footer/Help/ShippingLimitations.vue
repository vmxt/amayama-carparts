<script>
export default {
  data() {
    return {
      countries: [
        "ALBANIA AL",
        "ALGERIA DZ",
        "ANGOLA AO",
        "ARMENIA AM",
        "BANGLADESH BD",
        "BARBADOS BB",
        "BELIZE BZ",
        "BENIN BJ",
        "BOLIVIA BO",
        "BRAZIL BR",
        "BURKINA FASO BF",
        "BURUNDI BI",
        "CAMEROON CM",
        "CAYMAN ISLANDS KY",
        "CHAD REP. TD",
        "CHILE CL",
        "COLOMBIA CO",
        "CONGO (DEM. REP.) CD",
        "CROATIA HR",
        "CUBA CU",
        "CYPRUS CY",
        "CZECH REP. CZ",
        "DOMINICAN REP. DO",
        "ECUADOR EC",
        "EGYPT EG",
        "EL SALVADOR SV",
        "ESTONIA EE",
        "FRENCH POLYNESIA PF",
        "GABON GA",
        "GEORGIA GE",
        "GHANA DH",
        "GUATEMALA GT",
        "GUINEA (REP.) GN",
        "GUYANA GY",
        "HAITI HT",
        "HONDURAS REP. HN",
        "HUNGARY REP HU",
        "IRAN IR",
        "IVORY COAST CI",
        "JAMAICA JM",
        "JORDAN JO",
        "KAZAKHSTAN KZ",
        "KOREA (REP.) KR",
        "KUWAIT KW",
        "LATVIA LV",
        "LEBANON LB",
        "LIECHTENSTEIN LI",
        "LITHUANIA LT",
        "LUXEMBOURG LU",
        "MACAO MO",
        "MACEDONIA MK",
        "MADAGASCAR MG",
        "MALAWI MW",
        "MALI ML",
        "MALTA MT",
        "MAURITANIA MR",
        "MAURITIUS MU",
        "MEXICO MX",
        "MOLDOVA MD",
        "MONGOLIA MN",
        "MOROCCO MA",
        "MYANMAR MM",
        "NEW CALEDONIA NC",
        "NIGER (REP.) NE",
        "NIGERIA NG",
        "PANAMA CITY PA",
        "PERU PE",
        "POLAND PO",
        "ROMANIA RO",
        "RUSSIA RU",
        "RWANDA RW",
        "SIERRA LEONE SL",
        "SLOVAKIA SK",
        "SLOVENIA SI",
        "SRI LANKA LK",
        "SURINAM SR",
        "TOGO TG",
        "TRINIDAD & TOBAGO TT",
        "TUNISIA TN",
        "TURKEY TR",
        "TURKMENISTAN TM",
        "UGANDA UG",
        "UKRAINE UA",
        "VENEZUELA VE",
        "VIETNAM VN",
        "ZIMBABWE ZW",
      ],
    };
  },
};
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
          <router-link :to="{ name: 'help-shippinglimitations' }" class="ml-3">
            <p class="font-bold hover:underline">Shipping Limitations</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <aside
    class="mt-5 container flex flex-wrap items-center justify-between mx-auto"
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
            Shipping Limitations
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-medium">
          To prevent the spread of corona virus (COVID-19), The Universal Postal
          Union has launched shipping limitations from the UAE to the countries
          below:
        </p>
        <li
          class="font-light text-xl"
          v-for="country in countries"
          :key="country"
        >
          {{ country }}<br />
        </li>
      </div>
      <p class="mt-5 text-xl font-light">
        For <span class="font-bold">Japan warehouse</span>,
        <a
          target="#"
          class="text-blue-500 hover:underline"
          href="https://www.post.japanpost.jp/int/information/2020/0319_01_en.html"
          >find the list of affected countries here.</a
        >
      </p>
      <p class="mt-5">
        If your country is on the list, please note that there will be major
        delays in shipping. Although, you're still welcome to place your orders.
        We'll reserve them for you and ship as soon as the postal services are
        back to normal.
      </p>
    </div>
  </section>
</template>
