import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Index
    {
      path: "/",
      name: "index",
      component: () => import("@/views/IndexPage.vue"),
      meta: {
        title: "Amayama | Genuine Car Parts Import",
      },
    },

    // 404
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/Session/404Page.vue"),
      meta: {
        title: "Page Not Found",
      },
    },

    // Session
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("@/views/Session/SignInPage.vue"),
      meta: {
        title: "Sign In",
      },
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("@/views/Session/SignUpPage.vue"),
      meta: {
        title: "Sign Up",
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("@/views/Session/ForgotPass.vue"),
      meta: {
        title: "Reset Password",
      },
    },

    // Header
    {
      path: "/genuine-catalogs",
      name: "catalogues",
      component: () => import("@/views/Header/PartsCatalogues.vue"),
      meta: {
        title: "Genuine Catalogs",
      },
    },
    {
      path: "/inquiry",
      name: "inquiry",
      component: () => import("@/views/Header/MakeInquiry.vue"),
      meta: {
        title: "Make Inquiry",
      },
    },

    // Header Car
    {
      path: "/catalogs/toyota",
      name: "toyota",
      component: () => import("@/views/Car/Toyota/ToyotaIndex.vue"),
      meta: {
        title: "Catalogs - Toyota",
      },
    },
    {
      path: "/catalogs/honda",
      name: "honda",
      component: () => import("@/views/Car/Honda/HondaIndex.vue"),
      meta: {
        title: "Catalogs - Honda",
      },
    },
    {
      path: "/catalogs/mitsubishi",
      name: "mitsubishi",
      component: () => import("@/views/Car/Mitsubishi/MitsubishiIndex.vue"),
      meta: {
        title: "Catalogs - Mitsubishi",
      },
    },
    {
      path: "/catalogs/suzuki",
      name: "suzuki",
      component: () => import("@/views/Car/Suzuki/SuzukiIndex.vue"),
      meta: {
        title: "Catalogs - Suzuki",
      },
    },
    {
      path: "/catalogs/mazda",
      name: "mazda",
      component: () => import("@/views/Car/Mazda/MazdaIndex.vue"),
      meta: {
        title: "Catalogs - Mazda",
      },
    },
    {
      path: "/catalogs/nissan",
      name: "nissan",
      component: () => import("@/views/Car/Nissan/NissanIndex.vue"),
      meta: {
        title: "Catalogs - Nissan",
      },
    },
    {
      path: "/catalogs/subaru",
      name: "subaru",
      component: () => import("@/views/Car/Subaru/SubaruIndex.vue"),
      meta: {
        title: "Catalogs - Subaru",
      },
    },

    // Footer
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/Footer/AboutUs.vue"),
      meta: {
        title: "Amayama - About",
      },
    },
    {
      path: "/help",
      name: "help",
      component: () => import("@/views/Footer/HelpPage.vue"),
      meta: {
        title: "Amayama - Help",
      },
    },
    {
      path: "/notation",
      name: "notation",
      component: () => import("@/views/Footer/NotationPage.vue"),
      meta: {
        title: "Amayama - 特定商取引法に基づく表記",
      },
    },
    {
      path: "/privacy-policy",
      name: "privacy",
      component: () => import("@/views/Footer/PrivacyPolicy.vue"),
      meta: {
        title: "Amayama - Privacy Policy",
      },
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/Footer/TermsOfUse.vue"),
      meta: {
        title: "Amayama - Terms of Use",
      },
    },
    {
      path: "/shipping-calculator",
      name: "shipping",
      component: () => import("@/views/Footer/ShippingCalculator.vue"),
      meta: {
        title: "Amayama - Shipping Calculator",
      },
    },

    // Footer (Help.Vue)
    {
      path: "/help/faq",
      name: "help-faq",
      component: () => import("@/views/Footer/Help/HelpFAQ.vue"),
      meta: {
        title: "Amayama - Help FAQ",
      },
    },
    {
      path: "/help/how-to-buy",
      name: "help-howtobuy",
      component: () => import("@/views/Footer/Help/HowToBuy.vue"),
      meta: {
        title: "Amayama - How to Buy",
      },
    },
    {
      path: "/help/international-shipping",
      name: "help-internationalshipping",
      component: () => import("@/views/Footer/Help/InternationalShipping.vue"),
      meta: {
        title: "Amayama - International Shipping",
      },
    },
    {
      path: "/help/shipping-limitations",
      name: "help-shippinglimitations",
      component: () => import("@/views/Footer/Help/ShippingLimitations.vue"),
      meta: {
        title: "Amayama - Shipping Limitations",
      },
    },
    {
      path: "/help/warranty-and-returns",
      name: "help-warranty",
      component: () => import("@/views/Footer/Help/WarrantyAndReturns.vue"),
      meta: {
        title: "Amayama - Warranty and Returns",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
