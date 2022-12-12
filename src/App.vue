<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footerbar.vue";
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped></style>
