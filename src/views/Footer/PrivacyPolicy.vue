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
          <router-link :to="{ name: 'privacy' }" class="ml-3">
            <p class="font-bold hover:underline">Privacy Policy</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2
        class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Privacy Policy
      </h2>
      <div
        class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
      >
        <div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Personal information we collect
            </h3>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              Our website doesn't store or process any of your credit card data
              or other payment credentials. We also don't have access to your
              credentials from a third-party authentication providers (facebook,
              google and etc.).
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              We collect other personal information from you and any devices
              (including mobile devices) you use when you: use our services,
              register for an account with us, provide us information on a web
              form, update or add information to your account, or when you
              otherwise correspond with us.
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              Some of this personal information, such as a way to identify you,
              is necessary to enter into our User Agreement. The provision of
              all other personal information is voluntary, but may be necessary
              in order to use our services, such as buyer information needed to
              conclude a transaction.
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              We may also collect personal information from other sources, as
              described below.
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              Identifying information such as your name, addresses, telephone
              numbers or email addresses when you register for an account with
              us Buying information you provide during a transaction, or other
              transaction-based content that you generate or that is connected
              to your account as a result of a transaction you are involved in
              Financial information (paypal account ID, transaction ID's) in
              connection with a transaction. This is used to process refunds
              Postage, billing address and other information used to purchase or
              send an item, as well as relevant postage information (such as
              tracking numbers and tracking updates) You may also provide us
              other information through a web form, by updating or adding
              information to your account, through your participation in chats,
              or when you otherwise communicate with us regarding our services.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              We collect when you use our Services.
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              We collect information about your interaction with our Services
              and your communications with us. This is information we receive
              from devices (including mobile devices) you use when you access
              our services. This information could include the following: Device
              ID or unique identifier, device type and unique device token Your
              country information gained from your IP address Computer and
              connection information such as statistics on your page views,
              traffic to and from the sites, referral URL, your IP address, and
              your weblog information We use cookies, web beacons, unique
              identifiers, and similar technologies to collect information about
              the pages you view, the links you click, and other actions you
              take when using our Services, within our advertising or email
              content.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              How do we protect visitor information?
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              We use regular Malware Scanning.
            </p>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              Your personal information is contained behind secured networks and
              is only accessible by a limited number of persons who have special
              access rights to such systems, and are required to keep the
              information confidential. In addition, all sensitive/credit
              information you supply is encrypted via Secure Socket Layer (SSL)
              technology.
            </p>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              We implement a variety of security measures when a user places an
              order, enters, submits, or accesses their information to maintain
              the safety of your personal information.
            </p>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              All transactions are processed through gateway providers and are
              not stored or processed on our servers.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              How do we use your information?
            </h3>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              We may use the information we collect from you when you register,
              make a purchase, respond to a survey or marketing communication,
              surf the website, or use certain other site features in the
              following ways:
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              To provide payment processing and account management, operate,
              measure and improve our services, keep our services safe, secure
              and operational, and customize site content that includes items
              and services that you may like in response to actions that you
              take.
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              To contact you regarding your account, to troubleshoot problems
              with your account, to collect fees or monies owed or as otherwise
              necessary to provide you customer service We use general location
              information to provide you with location-based services (such as
              search results, delivery options and costs and other personalized
              content) We use aggregated (and depersonalized) activity of user's
              interactions with this website for the better understanding of how
              to improve our Services.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              How long we keep your personal information
            </h3>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              We retain your personal information for as long as necessary to
              provide the Services you have requested, or for other essential
              purposes such as complying with our legal obligations, resolving
              disputes, and enforcing our policies.
            </p>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              After it is no longer necessary for us to retain your personal
              information, we will dispose of it in a secure manner according to
              our data retention and deletion policies.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Third-party links
            </h3>
            <p class="text-gray-500 mb-5 dark:text-gray-400">
              Occasionally, at our discretion, we may include or offer
              third-party products or services on our website. These third-party
              sites have separate and independent privacy policies. We,
              therefore, have no responsibility or liability for the content and
              activities of these linked sites. Nonetheless, we seek to protect
              the integrity of our site and welcome any feedback about these
              sites.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              CAN SPAM Act
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-400">
              The CAN-SPAM Act is a United States law that sets the rules for
              commercial email, establishes requirements for commercial
              messages, gives recipients the right to have emails stopped from
              being sent to them, and spells out tough penalties for violations.
            </p>
            <p class="mb-5 font-medium text-gray-500 dark:text-gray-400">
              We collect your email address in order to:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                Send information, respond to inquiries, and/or other requests or
                questions
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Process orders and to send information and updates pertaining to
                orders
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                We may also send you additional information related to your
                product and/or service
              </li>
            </ul>
            <p class="mb-5 mt-5 font-medium text-gray-500 dark:text-gray-400">
              To be in accordance with CANSPAM we agree to the following:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                NOT use false or misleading subjects or email addresses
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Identify the message as an advertisement in some reasonable way
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Include the physical address of our business or site
                headquarters
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Monitor third-party email marketing services for compliance, if
                one is used
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Honor opt-out/unsubscribe requests quickly
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Allow users to unsubscribe by using the link at the bottom of
                each email
              </li>
            </ul>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              If at any time you would like to unsubscribe from receiving future
              emails, you can email us or follow the instructions at the bottom
              of each email.
            </p>
          </div>
        </div>
        <div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Your choices about how we use your personal information
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              You have choices about how we use your personal information to
              communicate with you, to send you information, and whether you
              want to stay signed into your account. These preferences can be
              managed in your
              <a
                href="#"
                class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                >account settings.</a
              >
            </p>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              We respect your right to access, correct, request deletion or
              request restriction of our usage of your personal information as
              required by applicable law. We also take steps to ensure that the
              personal information we collect is accurate and up to date.
            </p>
            <p class="mt-5 text-gray-500 dark:text-gray-400">
              You have the right to know what personal information we maintain
              about you We will provide you with a copy of your personal
              information in a structured, commonly used and machine-readable
              format on request If your personal information is incorrect or
              incomplete, you have the right to ask us to update it You have the
              right to object to our processing of your personal information You
              can also ask us to delete or restrict how we use your personal
              information, but this right is determined by applicable law and
              may impact your access to some of our Services.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Do we use 'cookies'?
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Yes. Cookies are small files that a site or its service provider
              transfers to your computer's hard drive through your Web browser
              (if you allow) that enables the site's or service provider's
              systems to recognize your browser and capture and remember certain
              information. For instance, we use cookies to help us remember and
              process the items in your shopping cart. They are also used to
              help us understand your preferences based on previous or current
              site activity, which enables us to provide you with improved
              services. We also use cookies to help us compile aggregate data
              about site traffic and site interaction so that we can offer
              better site experiences and tools in the future.
            </p>
            <p class="mt-5 mb-5 font-medium text-gray-500 dark:text-gray-400">
              We use cookies to:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                Help remember and process the items in the shopping cart
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Understand and save user's preferences for future visits
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Keep track of advertisements
              </li>
              <li class="py-2 px-4 w-full border-b border-gray-200">
                Compile aggregate data about site traffic and site interactions
                in order to offer better site experiences and tools in the
                future. We may also use trusted third-party services that.
              </li>
              <li class="py-2 px-4 w-full rounded-b-lg">
                Track this information on our behalf.
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              How we might share your personal information
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-400">
              We do not sell, rent, or otherwise disclose your personal
              information to third parties for their marketing and advertising
              purposes.
            </p>
            <p class="mt-5 mb-5 font-medium text-gray-500 dark:text-gray-400">
              We may disclose your personal information to the following parties
              for the following purposes:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                Third party financial institutions with whom we partner to offer
                financial products to you, for them to provide joint content and
                services (such as, registration, transactions, and customer
                support). These third-party financial institution partners will
                use your personal information to send you marketing
                communications only if you have requested their services.
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Third party shipping providers (e.g., DHL, UPS, USPS, etc.) with
                whom we share delivery address, contact information and shipment
                tracking information for the purposes of facilitating the
                delivery of items purchased and other delivery related
                communications.
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                To comply with our legal requirements, enforce our User
                Agreement, respond to claims that a listing or other content
                violates the rights of others, or protect anyone's rights,
                property or safety.
              </li>
              <li class="py-2 px-4 w-full rounded-b-lg border-gray-200">
                To third parties involved in a legal proceeding, if they provide
                us with a subpoena, court order or substantially similar legal
                basis, or we otherwise believe in good faith that the disclosure
                of information is necessary to prevent imminent physical harm or
                financial loss or to report suspected illegal activity.
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              California Online Privacy Protection Act
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              CalOPPA is the United States law to require commercial websites
              and online services to post a privacy policy. The law's reach
              stretches well beyond California to require a person or company in
              the United States (and conceivably the world) that operates
              websites collecting personally identifiable information from
              California consumers to post a conspicuous privacy policy on its
              website stating exactly the information being collected and those
              individuals with whom it is being shared, and to comply with this
              policy.
            </p>
            <p class="mt-5 font-medium text-gray-500 dark:text-gray-400">
              According to CalOPPA we agree to the following:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                Users can visit our site anonymously
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Once this privacy policy is created, we will add a link to it on
                our home page or as a minimum on the first significant page
                after entering our website
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Our Privacy Policy link includes the word 'Privacy' and can be
                easily be found on the page specified aboveDemographics and
                Interests Reporting
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Users will be notified of any privacy policy changes on our
                Privacy Policy Page
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                Users are able to change their personal information by logging
                in to their account
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Children's Privacy
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-400">
              Our websites are general audience websites and not intended for
              children. We do not knowingly collect personal information from
              users deemed to be children under their respective national laws.
            </p>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Fair Information Practices
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-400">
              The Fair Information Practices Principles form the backbone of
              privacy law in the United States and the concepts they include
              have played a significant role in the development of data
              protection laws around the globe. Understanding the Fair
              Information Practice Principles and how they should be implemented
              is critical to comply with the various privacy laws that protect
              personal information.
            </p>
            <p class="mb-5 font-medium text-gray-500 dark:text-gray-400">
              In order to be in line with Fair Information Practices we will
              take the following responsive action, should a data breach occur:
            </p>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                We will notify the users via email within 1 business day
              </li>
              <li
                class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                We will notify the users via in-site notification within 1
                business day
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h3
              class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
            >
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Data controller contact
            </h3>
            <p class="mb-5 text-gray-500 dark:text-gray-400">
              If there are any questions regarding this privacy policy you may
              contact us using the information below.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Amayama Trading Co., Ltd
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              562-0031 Osaka, Mino-shi, Onoharahigashi 4-22-3
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Storehouse Kita-no-mori
            </p>
            <p class="text-gray-500 dark:text-gray-400">Ph: 050-3786-7884</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
