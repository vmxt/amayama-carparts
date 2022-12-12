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
          <router-link :to="{ name: 'terms' }" class="ml-3">
            <p class="font-bold hover:underline">Terms of Use</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Terms and Conditions of Use
        </h2>
        <div
          class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
        />
        <p class="mb-4 font-medium">
          In using this website you are deemed to have read and agreed to the
          following terms and conditions:
        </p>
        <p class="mb-5 font-light">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
          "Client", “You” and “Your” refers to you, the person accessing this
          website and accepting the Company’s terms and conditions. "The
          Company", “Ourselves”, “We” and "Us", refers to Amayama Trading Co.,
          Ltd. “Party”, “Parties”, or “Us”, refers to both the Client and
          ourselves, or either the Client or ourselves. All terms refer to the
          offer, acceptance and consideration of payment necessary to undertake
          the process of our assistance to the Client in the most appropriate
          manner, for the express purpose of meeting the Client’s needs in
          respect of provision of the Company’s stated services/products, in
          accordance with and subject to laws applicable in the country this
          website is accessed from. Any use of the above terminology or other
          words in the singular, plural, capitalisation and/or he/she or they,
          are taken as interchangeable and therefore as referring to same.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Privacy Statement
        </h2>
        <p class="mb-4 font-light">
          We are committed to protecting your privacy. Authorized employees
          within the company on a need to know basis only use information
          collected from individual customers for the purpose of serving those
          customers. We constantly review our systems and data to ensure the
          best possible service to our customers. Unauthorised actions against
          computer systems and data will be investigated with a view to
          prosecuting and/or taking civil proceedings to recover damages against
          those responsible.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Confidentiality
        </h2>
        <p class="mb-4 font-light">
          Any information concerning the Client and their respective data used
          for transaction purposes may be passed to third parties. However,
          Client data is regarded as confidential and therefore will not be
          divulged to any third party, other than Paypal if legally required to
          do so to the appropriate authorities. Clients have the right to
          request sight of, and copies of any and all Client data we keep, on
          the proviso that we are given reasonable notice of such a request.
          Clients are requested to retain copies of any literature issued in
          relation to the provision of our services.
        </p>
        <p class="mb-4 font-bold">
          We will not sell, share, or rent your personal information to any
          third party or use your e-mail address for unsolicited mail. Any
          emails sent by Amayama Trading Co., Ltd. will only be in connection
          with the provision of agreed services and products.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Disclaimer
        </h2>
        <p class="mb-4 text-xl font-medium">Exclusions and Limitations</p>
        <p class="mb-4 font-medium">
          The information on this web site is provided on an "as is" basis. To
          the fullest extent permitted by law, Amayama Trading:
        </p>
        <p class="mb-5 font-light">
          excludes all representations and warranties relating to this website
          and its contents or which is or may be provided by any affiliates or
          any other third party, including in relation to any inaccuracies or
          omissions in this website and/or the Company’s literature; and
          excludes all liability for damages arising out of or in connection
          with your use of this website. This includes, without limitation,
          direct loss, loss of business or profits (whether or not the loss of
          such profits was foreseeable, arose in the normal course of things or
          you have advised Amayama Trading Co., Ltd. of the possibility of such
          potential loss), damage caused to your computer, computer software,
          systems and programs and the data thereon or any other direct or
          indirect, consequential and incidental damages. Amayama Trading does
          not however exclude liability for death or personal injury caused by
          its negligence. The above exclusions and limitations apply only to the
          extent permitted by law. None of your statutory rights as a consumer
          are affected.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Payment
        </h2>
        <p class="mb-4 font-light">
          Direct deposits, all major Credit/Debit Cards (via Paypal) and
          Telegraphic Wire Transfers are all acceptable methods of payment. Our
          Terms are payment in full within thirty days of the original quote
          offer provided. All goods remain the property of Amayama Trading until
          paid for in full. We reserve the right to refund any insufficient
          payments made by bank transfer at the customer’s expense (USD 50.00)
          in conjunction with cancelling the outstanding sales contract if
          required. Any Paypal payments received in an unauthorized manner
          (direct Paypal payment, not in conjunction with an outstanding
          contract via Paypal) will be refused and refunded.
        </p>
        <p class="mb-4 font-light">
          All contracts are processed upon receiving payment in full. Part
          payments, Letters of Credit or other non-standard payment methods are
          authorized on a per contract basis with Amayama Trading reserving the
          right to refuse such payment methods depending on the circumstances of
          the contract.
        </p>
        <p class="mb-4 font-light">
          Any credit balances may be settled at any time by the client. Any
          credit balances remaining in non-active accounts are dormant and may
          be used for purchases at any point thereafter, or until the credit
          balance is settled at the client’s request.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Cancellation Policy
        </h2>
        <p class="mb-4 font-light">
          Cancellation of unpaid quotes can be done at anytime by the client via
          their account on the Amayama Trading website. Once a quote has been
          paid for, cancellation is subject to approval. Once orders have been
          placed with suppliers or product has received by us from our suppliers
          we cannot make any cancellations of orders.Cancellation of unpaid
          quotes can be done at anytime by the client via their account on the
          Amayama Trading website. Once a quote has been paid for, cancellation
          is subject to approval. Once orders have been placed with suppliers or
          product has received by us from our suppliers we cannot make any
          cancellations of orders.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Termination of Agreements and Refunds Policy
        </h2>
        <p class="mb-4 font-light">
          Both the Client and ourselves have the right to terminate any contract
          for any reason, including the ending of services that are already
          underway which do not involve suppliers or 3rd parties. No refunds
          shall be offered, where a Service involving suppliers and/or 3rd
          parties is deemed to have begun and is, for all intents and purposes,
          underway. Any monies that have been paid to us which constitute
          payment in respect of the provision of unused Services within a
          contract, shall be refunded.Both the Client and ourselves have the
          right to terminate any contract for any reason, including the ending
          of services that are already underway which do not involve suppliers
          or 3rd parties. No refunds shall be offered, where a Service involving
          suppliers and/or 3rd parties is deemed to have begun and is, for all
          intents and purposes, underway. Any monies that have been paid to us
          which constitute payment in respect of the provision of unused
          Services within a contract, shall be refunded.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Availability
        </h2>
        <p class="mb-4 font-light">
          Unless otherwise stated, any item displayed on this website is not
          currently being held in stock by Amayama Trading or all affiliates, or
          is advertised as being available for purchase. Availability of parts
          is subject to confirmation by our suppliers and not all items
          displayed on this website may still be available for purchase. Amayama
          Trading, via our affiliate suppliers reserves the right to discontinue
          production or alter pricing (either as a result of currency
          fluctuations or price reviews) of any item displayed on this website,
          at any time, without prior notice.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Content
        </h2>
        <p class="mb-4 font-light">
          You are solely responsible for evaluating the fitness for a particular
          purpose of any downloads, programs and text available through this
          site. Redistribution or republication of any part of this site or its
          content is prohibited, including such by framing or other similar or
          any other means, without the express written consent of the Company.
          The Company does not warrant that the service from this site will be
          uninterrupted, timely or error free, although it is provided to the
          best ability. By using this service you thereby indemnify Amayama
          Trading Co., Ltd., its employees, agents and affiliates against any
          loss or damage, in whatever manner, howsoever caused.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Log Files
        </h2>
        <p class="mb-4 font-light">
          We use IP addresses to analyse trends, administer the site, track
          user’s movement, and gather broad demographic information for
          aggregate use. IP addresses are not linked to personally identifiable
          information. Additionally, for systems administration, detecting usage
          patterns and troubleshooting purposes, our web servers automatically
          log standard access information including browser type, access
          times/open mail, URL requested, and referral URL. This information is
          not shared with third parties and is used only within Amayama Trading
          Co., Ltd. on a need-to-know basis. Any individually identifiable
          information related to this data will never be used in any way
          different to that stated above without your explicit permission.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Cookies
        </h2>
        <p class="mb-4 font-light">
          Like most interactive web sites Amayama Trading Co., Ltd. website uses
          cookies to enable us to retrieve user details for each visit. Cookies
          are used in some areas of our site to enable the functionality of this
          area and ease of use for those people visiting. Some of our affiliate
          partners may also use cookies.Like most interactive web sites Amayama
          Trading Co., Ltd. website uses cookies to enable us to retrieve user
          details for each visit. Cookies are used in some areas of our site to
          enable the functionality of this area and ease of use for those people
          visiting. Some of our affiliate partners may also use cookies.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Links to this website
        </h2>
        <p class="mb-4 font-light">
          You may create links to any page of this website without limitations.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Links from this website
        </h2>
        <p class="mb-4 font-light">
          We do not monitor or review the content of other party’s websites
          which are linked to from this website. Opinions expressed or material
          appearing on such websites are not necessarily shared or endorsed by
          us and should not be regarded as the publisher of such opinions or
          material. Please be aware that we are not responsible for the privacy
          practices, or content, of these sites. We encourage our users to be
          aware when they leave our site & to read the privacy statements of
          these sites. You should evaluate the security and trustworthiness of
          any other site connected to this site or accessed through this site
          yourself, before disclosing any personal information to them. Amayama
          Trading Co., Ltd. will not accept any responsibility for any loss or
          damage in whatever manner, howsoever caused, resulting from your
          disclosure to third parties of personal information.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Copyright
        </h2>
        <p class="mb-4 font-light">
          The entire content included in this site, including but not limited to
          text, graphics or code is copyrighted as a collective work under
          general and other copyright laws, and is the property of Amayama
          Trading Co., Ltd. or any affiliates. The collective work includes
          works that are licensed to Amayama Trading Co., Ltd. Copyright 2017,
          Amayama Trading Co., Ltd. All Rights Reserved. Permission is granted
          to electronically copy and print hard copy portions of this site for
          the sole purpose of placing an order with Amayama Trading Co., Ltd. or
          any affiliates, or purchasing Amayama Trading Co., Ltd. or any
          affiliates products. You may display and, subject to any expressly
          stated restrictions or limitations relating to specific material,
          download or print portions of the material from the different areas of
          the site solely for your own non-commercial use, or to place an order
          with Amayama Trading Co., Ltd. or any affiliates, or to purchase
          Amayama Trading Co., Ltd. or any affiliates products. Any other use,
          including but not limited to the reproduction, distribution, display
          or transmission of the content of this site is strictly prohibited,
          unless authorized by Amayama Trading Co., Ltd. or any affiliates. You
          further agree not to change or delete any proprietary notices from
          materials downloaded from the site.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Trademarks
        </h2>
        <p class="mb-4 font-light">
          All trademarks, service marks and trade names of Amayama Trading Co.,
          Ltd. or any affiliates used in the site are trademarks or registered
          trademarks of Amayama Trading Co., Ltd. or any affiliates.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Communication
        </h2>
        <p class="mb-4 font-light">
          We have several different e-mail addresses for different queries.
          These, & other contact information, can be found on our Contact Us
          link on our website.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Force Majeure
        </h2>
        <p class="mb-4 font-light">
          Neither party shall be liable to the other for any failure to perform
          any obligation under any Agreement which is due to an event beyond the
          control of such party including but not limited to any disaster,
          terrorism, war, Political insurgence, insurrection, riot, civil
          unrest, act of civil or military authority, uprising, earthquake,
          flood or any other natural or man made eventuality outside of our
          control, which causes the termination of an agreement or contract
          entered into, nor which could have been reasonably foreseen. Any Party
          affected by such event shall forthwith inform the other Party of the
          same and shall use all reasonable endeavours to comply with the terms
          and conditions of any Agreement contained herein.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Waiver
        </h2>
        <p class="mb-4 font-light">
          Failure of either Party to insist upon strict performance of any
          provision of this or any Agreement or the failure of either Party to
          exercise any right or remedy to which it, he or they are entitled
          hereunder shall not constitute a waiver thereof and shall not cause a
          diminution of the obligations under this or any Agreement. No waiver
          of any of the provisions of this or any Agreement shall be effective
          unless it is expressly stated to be such and signed by both Parties.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Access to this website
        </h2>
        <p class="mb-4 font-light">
          We may block your access to this website without any notification if
          you will spam, make false orders or make other harmful actions.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          General
        </h2>
        <p class="mb-4 font-light">
          By accessing this website and using our services/buying our products
          you consent to these terms and conditions. If any of these terms are
          deemed invalid or unenforceable for any reason (including, but not
          limited to the exclusions and limitations set out above), then the
          invalid or unenforceable provision will be severed from these terms
          and the remaining terms will continue to apply. Failure of the Company
          to enforce any of the provisions set out in these Terms and Conditions
          and any Agreement, or failure to exercise any option to terminate,
          shall not be construed as waiver of such provisions and shall not
          affect the validity of these Terms and Conditions or of any Agreement
          or any part thereof, or the right thereafter to enforce each and every
          provision. These Terms and Conditions shall not be amended, modified,
          varied or supplemented except in writing and signed by duly authorised
          representatives of the Company.
        </p>
      </div>
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mt-5 mb-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Notification of Changes
        </h2>
        <p class="mb-4 font-light">
          The Company reserves the right to change these conditions from time to
          time as it sees fit and your continued use of the site will signify
          your acceptance of any adjustment to these terms. If there are any
          changes to our privacy policy, we will announce that these changes
          have been made on our home page and on other key pages on our site.
          You are therefore advised to re-read this statement on a regular
          basis.
        </p>
        <p class="mb-4 font-light">
          These terms and conditions form part of the Agreement between the
          Client and ourselves. Your accessing of this website and/or
          undertaking of a booking or Agreement indicates your understanding,
          agreement to and acceptance, of the Disclaimer Notice and the full
          Terms and Conditions contained herein. Your statutory Consumer Rights
          are unaffected.
        </p>
      </div>
    </div>
  </section>
</template>
