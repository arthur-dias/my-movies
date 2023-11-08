<template>
  <header>
    <MainNav />
  </header>
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped></style>
