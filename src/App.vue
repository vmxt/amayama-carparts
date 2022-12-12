<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped></style>
