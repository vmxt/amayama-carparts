import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Index
    {
      path: "/",
      name: "index",
      component: () => import("@/views/IndexPage.vue"),
    },

    // Header
    {
      path: "/catalogs",
      name: "catalogues",
      component: () => import("@/views/Header/PartsCatalogues.vue"),
    },
    {
      path: "/inquiry",
      name: "inquiry",
      component: () => import("@/views/Header/MakeInquiry.vue"),
    },

    // Footer
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/Footer/AboutUs.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("@/views/Footer/HelpPage.vue"),
    },
    {
      path: "/notation",
      name: "notation",
      component: () => import("@/views/Footer/NotationPage.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy",
      component: () => import("@/views/Footer/PrivacyPolicy.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/Footer/TermsOfUse.vue"),
    },
    {
      path: "/shipping-calculator",
      name: "shipping",
      component: () => import("@/views/Footer/ShippingCalculator.vue"),
    },

    // Footer (Help.Vue)
    {
      path: "/help/faq",
      name: "help-faq",
      component: () => import("@/views/Footer/Help/HelpFAQ.vue"),
    },
    {
      path: "/help/how-to-buy",
      name: "help-howtobuy",
      component: () => import("@/views/Footer/Help/HowToBuy.vue"),
    },
    {
      path: "/help/international-shipping",
      name: "help-internationalshipping",
      component: () => import("@/views/Footer/Help/InternationalShipping.vue"),
    },
    {
      path: "/help/shipping-limitations",
      name: "help-shippinglimitations",
      component: () => import("@/views/Footer/Help/ShippingLimitations.vue"),
    },
    {
      path: "/help/warranty-and-returns",
      name: "help-warranty",
      component: () => import("@/views/Footer/Help/WarrantyAndReturns.vue"),
    },
  ],
});

export default router;
