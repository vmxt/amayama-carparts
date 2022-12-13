<script setup>
import { RouterView } from "vue-router";
import SubNavbar from "./components/SubNavbar.vue";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <SubNavbar />
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped></style>
