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

    // Header Car
    {
      path: "/catalogs/toyota",
      name: "toyota",
      component: () => import("@/views/Car/Toyota/ToyotaIndex.vue"),
    },
    {
      path: "/catalogs/honda",
      name: "honda",
      component: () => import("@/views/Car/Honda/HondaIndex.vue"),
    },
    {
      path: "/catalogs/mitsubishi",
      name: "mitsubishi",
      component: () => import("@/views/Car/Mitsubishi/MitsubishiIndex.vue"),
    },
    {
      path: "/catalogs/suzuki",
      name: "suzuki",
      component: () => import("@/views/Car/Suzuki/SuzukiIndex.vue"),
    },
    {
      path: "/catalogs/mazda",
      name: "mazda",
      component: () => import("@/views/Car/Mazda/MazdaIndex.vue"),
    },
    {
      path: "/catalogs/nissan",
      name: "nissan",
      component: () => import("@/views/Car/Nissan/NissanIndex.vue"),
    },
    {
      path: "/catalogs/subaru",
      name: "subaru",
      component: () => import("@/views/Car/Subaru/SubaruIndex.vue"),
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
