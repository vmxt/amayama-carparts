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
          <router-link :to="{ name: 'help-faq' }" class="ml-3">
            <p class="font-bold hover:underline">FAQ</p>
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
            Shipping
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-medium">
          Note: Amayama Trading works with local postal services and
          international courier companies to supply parts. Amayama Trading is
          not involved with the local delivery of orders in the destination
          country. As such Amayama Trading cannot intervene if delays are
          experienced once the package is within the mail system (including
          customs clearance) in the destination country.
        </p>

        <p class="mb-4 font-medium">
          The tracking information has not updated. Where's my order?
        </p>

        <p class="mb-10 font-light">
          Orders are shipped either by air/surface mail, or by international
          courier companies DHL or FedEx. In the case of air or surface (sea,
          land) mail, tracking updates can only be provided with the cooperation
          of the postal service in the destination country. It can take some
          extra time for the tracking to update. In some cases, the order can
          actually be delivered before the tracking is updated. Please be aware
          that if the postal service in your country is known to offer
          sub-standard service this can also affect the information transfer
          between the sending and receiving postal services. We kindly as
          customers to allow more time for tracking updates and delivery in
          these cases.
        </p>

        <p class="mb-4 font-medium">
          My order's estimated delivery date has passed, can you help me?
        </p>

        <p class="mb-10 font-light">
          Postal services can only provide estimated delivery dates in
          conjunction with local mail handling conditions in the destination
          country. Once the parcel has left Japan or the UAE, customers must
          contact their local postal service (or the contractor delivery company
          used by the postal service) if their order is being delayed or held by
          customs or the delivery post office. Please give the tracking number
          of the order to a local postal service representative for a final
          delivery date or instructions on how to release the parcel from
          customs.
        </p>

        <p class="mb-4 font-medium">
          My order's shipping date has passed, what's going on?
        </p>
        <p class="mb-10 font-light">
          Minor delays happen frequently, especially when global conditions
          influence parts production and the ability to transport parts, such as
          the situation surrounding COVID19. While Amayama Trading may be able
          to receive some parts from the supplies within the estimated time
          frame, others (even with the same part number) might be delayed for
          any number of reasons which can impact the transport of parts. These
          types of delays can happen at any time and is why Amayama Trading can
          only offer estimated time frames (within two dates) as opposed to a
          deadline delivery date.
        </p>

        <p class="mb-4 font-medium underline">PART NUMBER AVAILABILITY</p>

        <p class="mb-4 font-medium">
          Your website shows that the part number I want is/was available, why
          did it get cancelled?ART NUMBER AVAILABILITY
        </p>
        <p class="mb-10 font-light">
          Amayama Trading does everything possible to ensure that the part
          numbers you request can be supplied. However the suppliers have
          limitations in the quantities they can supply and the time in which
          they can be supplied. They also reserve the right to cancel orders if
          a production runs is stopped due to deminishing demand. These factors
          culminate in the cancellation of various part numbers either due to
          delays with an unknown duration, or the part is physically no longer
          available. Amayama Trading can only update its database after the
          manufacturers (and therefore their suppliers) inform Amayama Trading
          of any changes. These changes are only able to be checked if there is
          an order from customers requesting part numbers.
        </p>

        <p class="mb-4 font-medium">
          Why can't you list actual units in stock of the part numbers I want?
        </p>
        <p class="mb-10 font-light">
          There are millions of part numbers across all the manufacturers'
          databases, with many of those part numbers rarely requested. While
          very fast selling part numbers that are in high demand have a very
          high chance of availability, they can still sell out in a very short
          time. Amayama Trading is a global supplier of genuine and aftermarket
          Japanese auto parts so it is not possible to update the database in
          intervals frequently enough to react to these very fast and frequent
          changes in availability. Depending on the demand for a particular part
          number, this situation can render the stock amount obsolete as soon as
          it is updated.
        </p>

        <p class="mb-4 font-medium">
          OK I understand that, but why does your website's "xx% availability"
          information sometimes seem too optimistic?
        </p>
        <p class="mb-10 font-light">
          This is to encourage demand. If it was not encouraged then it would
          have an adverse effect on demand resulting in even less of a chance of
          parts being available. For this reason we kindly ask all customers to
          be aware that a "percentage of availability" system is used based on
          Amayama Trading's previous availability check of part numbers.
          Assuming that the part is/was in high demand, there is still a chance
          that the part could sell out and become unavailable, albeit a very
          small chance. Even though it would be rare, a part number with 98%
          chance of availability could still sell out resulting in a cancelled
          part in your order. Only part numbers with a 100% chance of
          availability stated on the webiste should be considered available with
          zero chance of being cancelled.
        </p>

        <p class="mb-4 font-medium underline">
          PART NUMBER CANCELLATIONS AND REFUNDS
        </p>

        <p class="mb-4 font-medium">
          You cancelled the main part in my order, can I cancel the entire order
          and get a full refund?
        </p>
        <p class="mb-10 font-light">
          While this is possible, it is approved on a 'case by case' basis.
          Often the remaining parts in the order are small and/or can be
          cancelled at the supplier without any problems. However if the
          remaining parts are higher in value, are not able to be cancelled at
          the supplier, or are rarely ordered parts then our staff will discuss
          other possibilities with the client before cancelling other parts in
          the order. Amayama Trading understands the situations involved might
          have a negative effect on the customer if not cancelled and this will
          also be seriously considered before offering a solution.
        </p>

        <p class="mb-4 font-medium">
          I requested a refund of the Free Balance in my Amayama account some
          time ago, where is it?
        </p>
        <p class="mb-10 font-light">
          After it has been requested, every effort is made to refund the Free
          balance (credit) in your Amayama account within reasonable time. There
          are occasions when credit balances are from very old orders which were
          missed prior to the Amayama internal system upgrade, or other factors
          which prevent the refund from being made in a timely manner. In these
          situations, while it may take more time to refund, the credit in your
          Amayama account will be refunded once able to do so.
        </p>
      </div>
    </div>
  </section>
</template>
