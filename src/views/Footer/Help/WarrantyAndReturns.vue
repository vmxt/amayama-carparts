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
          <router-link :to="{ name: 'help-warranty' }" class="ml-3">
            <p class="font-bold hover:underline">Warranty & Returns</p>
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
            Refunds, Warranty and Returns
          </h2>
          <div
            class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
          />
        </div>
        <p class="mb-4 font-medium">Warranty</p>
        <p class="mb-10 font-light">
          If the purchased part fails under normal operating conditions
          <span class="font-bold">*1</span>,
          <span class="font-bold">*2</span> and is within the manufacturer 12
          month international warranty period (starting from the date the part
          is received by the buyer), Amayama Trading will either replace the
          item or refund the cost of the item for the life of the published
          warranty.
        </p>
        <p class="mb-10 font-light">
          Please note that for part defects, claims must be made as soon as the
          defect (whether a production defect which affects the function of the
          part, or cosmetic defect which does not affect the function of the
          part) is discovered prior to installation. If the part is installed
          despite knowing that the defect is present then the customer accepts
          the defect part and forfeits the claim process.
        </p>
        <p class="mb-10 font-light">
          *1
          <span class="font-bold"
            >The part must be installed by a certified technician for the
            manufacturer who produced the part</span
          >
          (Example: a certified Toyota, Nissan, Honda etc technician) and if a
          claim is made, the claim must be accompanied by proof that the
          technician carried out the installation and a statement by the
          technician outlining the fault.
          <span class="font-bold underline"
            >The warranty will be void if the part is not installed by a
            qualified mechanic.</span
          >
          The faulty part must be sent back to Amayama Trading and a new item
          will be sent if the manufacturer is satisfied the warranty conditions
          have been met. Amayama Trading will refund the return postage charge
          upon receipt of the faulty part if the part is sent back according to
          Amayama Trading's accepted return shipment method.
        </p>
        <p class="mb-10 font-light">
          *2
          <span class="font-bold"
            >The part must only be used in the manner which the manufacturer
            intended as original equipment when the vehicle was sold new from an
            authorised dealer.</span
          >
          Parts that are installed from other vehicles which did not include the
          part as original equipment when sold new, or parts that are modified,
          or tampered with, to fit a vehicle (whether the part was original
          equipment on the vehicle or not) will void the warranty and no claim,
          refund or return will be accepted by the manufacturer or Amayama
          Trading.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-10 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Damaged Parts, Returns and Refunds
        </h2>
        <p class="mb-4 text-2xl font-medium">
          If parts are damaged in transit:
        </p>
        <p class="mb-4 font-light">
          In order for a claim to be made to the Carrier (Mail service or
          Courier),
          <span class="underline"
            >a damage claim must be made to the Carrier representative by the
            customer at the time the parcel is delivered.</span
          >
          Amayama Trading will also make a claim once the recipient notifies our
          staff of the damage. It will take some time for the claim to be
          processed so we kindly ask for customers to allow time for the claim
          to be processed. Amayama Trading will either replace the part(s) or
          offer a refund for the damaged part(s) at the customer's request once
          the claim has been accepted by the Carrier. Stock can sell out in the
          time it takes to process the claim so part replacement is dependent on
          availability. Amayama Trading may or may not require the part to be
          returned depending on the circumstances.
        </p>
        <p class="mb-4 text-2xl font-medium">
          If parts are wrongly ordered by the customer:
        </p>
        <p class="mb-4 font-light">
          Wrongly ordered parts are the responsibility of the customer. Amayama
          Trading will not accept wrongly ordered parts back for exchange or
          refund. If there is any doubt about the compatibility or appearance of
          a part, please ask one of our friendly staff to assist with confirming
          the correct part number(s) prior to submitting an order, or prior to
          making payment.
        </p>
        <p class="mb-4 text-2xl font-medium">
          If parts have been received but are no longer needed:
        </p>
        <p class="mb-4 font-light">
          For orders that are received in good condition and correctly supplied,
          Amayama Trading will not accept parts back for a refund if they have
          already been received by the customer but are no longer required due
          to changing circumstances. Your understanding and cooperation is
          greatly appreciated. For instances where a request is received from
          the customer to cancel the ordered part(s) after the parts have been
          received at the Amayama Trading warehouse,
          <span class="underline"
            >a 30% restocking fee will be deducted from the price of each
            cancelled part in the order.</span
          >
          The restocking fee covers the cost of adding parts to Amayama
          Trading's stock unintentionally which have little to no chance of
          selling in a reasonable timefame.
        </p>

        <p class="mb-4 text-2xl font-medium">
          If parts are wrongly supplied or part numbers are wrongly advised by
          Amayama Trading:
        </p>
        <p class="mb-4 font-light">
          We will ask the customer to return the part to Amayama Trading in as
          new condition in its undamaged packaging and the correct part will be
          sent at no charge to the customer. Amayama Trading will refund the
          return postage charge upon receipt of the wrongly supplied part in as
          new condition and part is sent back according to Amayama Trading's
          accepted return shipment method.
        </p>

        <p class="mb-4 text-2xl font-medium">
          If parts cannot be installed due to a modification to the vehicle:
        </p>
        <p class="mb-4 font-light">
          Parts that cannot be installed because the vehicle has been modified
          (either by the current or previous owner) are regarded as wrongly
          ordered parts and therefore will not be accepted back for refund or
          exchange. Clients are advised to inform our staff of any modifications
          or that the part is intended to be installed to a another part that is
          suspected to be modified, not standard equipment or a non-genuine
          replacement part
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Disclaimer
        </h2>
        <p class="mb-4 font-bold">
          The car manufacturers (and therefore Amayama Trading) will not take
          back wrongly ordered parts for refund or return/exchange. It is
          imperative to ensure the parts are correct before making payment.
          Amayama Trading takes no responsibility for parts that are supplied
          correctly according to the order and the order confirmed by the
          customer at the time of payment, but later found to be wrongly ordered
          by the customer.
        </p>
      </div>

      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Claim Submission Period
        </h2>
        <p class="mb-4">
          Claims for warranty, damaged parts or wrongly supplied parts are
          accepted within 1 year of the delivery date of the order. Warranty
          claims outside the 12 month period stated under "Warranty" above will
          be strictly refused. Other claims submitted outside the 1 year time
          period may be addressed depending on the nature of the claim. Please
          note that the usual claim resolution conditions will not be applied in
          these cases.
        </p>
      </div>
    </div>
  </section>
</template>
