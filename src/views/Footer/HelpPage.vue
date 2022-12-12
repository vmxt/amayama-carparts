<template>
  <nav
    class="relative mt-5 container flex flex-wrap items-center justify-between mx-auto"
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
            <p class="font-bold hover:underline">Help</p>
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
        class="block py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        International Shipping
      </router-link>
      <router-link
        :to="{ name: 'help-warranty' }"
        class="block py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Warranty & Returns
      </router-link>
      <router-link
        :to="{ name: 'help-howtobuy' }"
        class="block py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        How to Buy?
      </router-link>
      <router-link
        :to="{ name: 'help-shippinglimitations' }"
        class="block py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        COVID-19 shipping limitations
      </router-link>
      <router-link
        :to="{ name: 'help-faq' }"
        class="block py-2 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
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
            Help
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Ordering
        </h2>
        <p class="mb-5 font-light">
          The ordering process starts with an
          <span class="font-bold">inquiry</span> which is submitted by the
          customer. After it's recieved by a sales manager, we check the item's
          <span class="font-bold">availability</span> and then send a
          <span class="font-bold">quote</span>. Once a payment is recieved, the
          order is either sent to the manufacturer or fulfilled with parts from
          Amayama Trading's own stock.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          What's a genuine part?
        </h2>
        <p class="mb-4 font-light">
          A genuine part is manufactured by the OEM (Original Equipment
          Manufacturer) who produces parts for the vehicle made by the
          Automobile company which includes that part. A genuine part will offer
          all the durability and qualities of those originally equipped and will
          maintain the vehicle's warranty requirements.
        </p>
        <p class="mb-5 font-light">
          Amayama Trading only deals with new genuine parts. Even though our
          prices might seem very low, all parts are made in Japan (or in some
          cases by authorized offshore OEM) and genuine articles with standard
          international warranty.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Where can I get part numbers?
        </h2>
        <p class="mb-4 font-light">
          Part numbers can be obtained from our own online parts catalogs, or by
          making a request to one of our sales representatives.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          I can't find my part number... Can you find it for me?
        </h2>
        <p class="mb-4 font-light">
          Sure. Just describe the required part in the inquiry form. We'll find
          it and quote you for the exact part numbers. It's sometimes possible
          that the part number is unique to a particular market and not widely
          available. In those cases we must ask the customer to obtain those
          part numbers from their local authorized dealer of that particular
          brand.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          How long will it take to process my order?
        </h2>
        <p class="mb-4 font-light">
          Processing of orders can take 1 - 3 days from the original inquiry.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          How can I track my order?
        </h2>
        <p class="mb-4 font-light">
          Clients can track their order via our customer account system, there
          you can check up on your order's progress which will be updated
          automatically with each step.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Availability Check
        </h2>
        <p class="mb-4 text-xl font-medium">
          Will there be any delays in supplying parts?
        </p>
        <p class="mb-4 font-light">
          Once your enquiry has been received stock availability must be checked
          to make sure the parts you require are available. For cars less than
          10 years old there's a very good chance the parts will be available*
          right away, however some parts are on back order and will take a
          period of time to restock. For cars older than 10 years, parts will
          become progressively depleted over time** once production of that part
          stops, so please keep this in mind when ordering.
        </p>
        <p class="mb-4 font-light">
          <span class="font-medium">*Note</span>: Availability checks will be
          done automatically for all parts and information on availability will
          be included in our quotation but are NOT expressed in actual units
          available. If a unit is shown in the "Availability" column in the
          search results for a particular part number, that amount is not in
          real-time (ie: it could have changed since the check was done), and
          may differ once payment has been made and the order has been sent to
          the supplier.
          <span class="font-medium"
            >Availability checks for individual orders are only done on a "by
            request" basis, so please submit a request to check availability at
            the time you submit your order.</span
          >
        </p>
        <p class="mb-4 font-light">
          <span class="font-medium">**Note</span>: Regarding parts that are "no
          longer available" (NLA): Production cycles depend solely on demand.
          Once demand drops below the minimum amount required for production,
          production of that part will stop. Once stock of that part has been
          depeleted and there's no schedule for a new production run, after some
          time the part will be designated "NLA". It's possible that NLA parts
          can be reproduced again at some point, however that also depends on
          demand and therefore it cannot be estimated when they will be
          available again, if at all.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Quotation
        </h2>
        <p class="mb-4 font-light">
          Once the availability check has been completed we'll include that
          information in the quote. The quote typically includes quantity, part
          description, part price, availability information and shipping
          charges. Quotes are valid for 14 days, however, depending on the age
          of the vehicle some parts have very low stock levels so a further
          availability check may be needed after the quote validity period has
          ended.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Payment
        </h2>
        <p class="mb-4 text-xl font-medium">How can I pay for my purchase?</p>
        <p class="mb-4 font-light">
          Currently we have two methods of payment, either by Paypal (by linked
          bank account or registered credit card) or by direct deposit into our
          Singapore bank account. Paypal allows payment to be made even if you
          don't have a PayPal account. Please see the PayPal customer support
          page here for more information:
          <a
            target="#"
            href="https://www.paypal.com/us/webapps/helpcenter/helphub/home/"
            class="font-semibold hover:underline text-blue-500"
            >https://www.paypal.com/us/webapps/helpcenter/helphub/home/</a
          >
        </p>
        <p class="mb-4 font-bold">
          *Please note: We have diverted all international bank transfer
          payments to our Singapore bank account. Please contact your sales
          manager for any information pertaining to bank transfers prior to
          making payment by that method.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Do you take USD/AUD/EUR etc.?
        </h2>
        <p class="mb-4 font-light">
          Yes. Paypal will convert currencies during the transaction and show
          you the amount to be deposited in your local currency and the
          conversion to
          <a
            target="#"
            class="font-semibold hover:underline text-blue-500"
            href="https://www.google.com/search?hl=en&q=100+yen&aq=f&aqi=&aql=&oq=&gs_rfai="
            >Japanese Yen.</a
          >
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Shipping and Delivery
        </h2>
        <p class="mb-4 text-xl font-medium">Where do parts come from?</p>
        <p class="mb-4 font-light">
          All parts are sent from our warehouse in
          <a
            target="#"
            class="text-blue-500 hover:underline font-semibold"
            href="https://www.google.com/maps?hl=en&q=Mino+City+in+Osaka,+Japan&ie=UTF8&hq&hnear=Minoo,+Osaka+Prefecture,+Japan&ei=FRLBTPWjFNSyOPLV-c8M&ved=0CBUQ8gEwAA&ll=34.815495,135.471725&spn=0.38672,0.617294&z=11"
            >Minoo City in Osaka, Japan</a
          >, Sydney, Australia or Dubai, UAE.
        </p>
        <p class="mb-4 font-bold">
          *Note: Minimum weight for parcels sent from the UAE is 500g.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Do you ship internationally?
        </h2>
        <p class="mb-4 text-xl font-medium">
          Yes. We ship orders worldwide to any destination.
        </p>
        <p class="mb-4 font-light">
          Attention: Amayama Trading is not responsible for any import tax,
          duties or other charges due to import laws at the destination country.
          The customer is fully responsible to comply with and pay any local
          import taxes, customs charges or any additional payments required
          thereafter. Please contact your local postal service or customs office
          to consult about import rules and limitations before making payment.
          Amayama Trading will not refund any unexpected shipping charges, any
          fees, taxes or duties required for customs clearance. Please note that
          Amayama Trading will not refund payments if orders are returned due to
          being rejected by the customer or customs officials at the destination
          country.
        </p>
        <p class="mb-4">
          <router-link
            :to="{ name: 'help-internationalshipping' }"
            class="text-blue-500 hover:underline font-semibold"
            >Click here to read more about international shipping.</router-link
          >
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          What's the maximum size for parcels?
        </h2>
        <p class="mb-4 text-xl font-medium mx-auto text-center">
          Please check the picture below.
        </p>
        <img
          class="border border-gray-500 items-center mx-auto"
          src="@/assets/help/pic_i_parcel_en.gif"
          draggable="false"
        />
        <p class="mt-5 font-light">
          Region 1 (East/South East Asia): 2 - 3 days (EMS), 8 days (Standard
          Air), 2 weeks (Economy Air SAL), 2 - 3 months (Surface)
        </p>
        <p class="font-light">
          Region 2-1 (Oceania, North America, Central America, Middle East): 3 -
          7 days (EMS), 1 - 2 weeks - (Standard Air), 2 - 3 weeks (Economy Air
          SAL), 2 - 3 months (Surface)
        </p>
        <p class="font-light">
          Region 2-2 (Europe): 3 - 4 days (EMS), 6 - 8 days (Standard Air), 1 -
          2 weeks (Economy Air SAL), 2 - 3 months (Surface)
        </p>
        <p class="font-light">
          Region 3 (South America, Africa): 4 - 6 days (EMS), 8 - 11 days
          (Standard Air), 2 - 3 weeks (Economy Air SAL), 3 - 4 months (Surface)
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          When will my package arrive?
        </h2>
        <p class="mt-5 font-light">
          Once the order has been placed and payment been made, delivery transit
          times usually take 5 - 10 days if handled by Japan Post EMS, 7 - 14
          days if handled by standard air mail, or 6 - 8 weeks by surface (sea)
          mail. Should you require a bulk order totaling over 30kg, arrangements
          can be made for sea freight or by Fedex air freight on application.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Wholesale
        </h2>
        <p class="mt-5 text-xl font-medium">Can I be a wholesale partner?</p>
        <p class="mt-5 font-light">
          We appreciate all wholesale inquiries and will discuss eligibility on
          application.
        </p>
        <h2
          class="mt-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          How do you ship wholesale orders?
        </h2>
        <p class="mt-5 font-light">
          There are different options available for shipping to wholesale
          customers depending on the size, frequency and destination of the
          order. Feel free to consult us for further information.
        </p>
      </div>
    </div>
  </section>
</template>
