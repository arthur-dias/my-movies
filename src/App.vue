<template>
  <header>
    <MainNav />
    <RouterView />
  </header>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
</script>

<style scoped></style>
