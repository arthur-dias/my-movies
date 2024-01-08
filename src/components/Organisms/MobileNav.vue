<template>
  <div class="mobileNav">
    <div class="buttons">
      <button>Login</button>
      <button @click="showNav = !showNav" :class="{ active: showNav }">
        Menu
      </button>
    </div>
    <MobileSearch />
    <!-- DROPDOWN NAV -->
    <nav :class="{ close: !showNav, open: showNav }" ref="nav">
      <RouterLink active-class="active" to="/" @click="showNav = false"
        >Home</RouterLink
      >
      <!-- <RouterLink active-class="active" to="/filmes" @click="showNav = false"
        >Filmes</RouterLink
      >
      <RouterLink active-class="active" to="/reviews" @click="showNav = false"
        >Reviews</RouterLink
      >
      <RouterLink active-class="active" to="/listas" @click="showNav = false"
        >Listas</RouterLink
      >
      <RouterLink active-class="active" to="/sobre" @click="showNav = false"
        >Sobre</RouterLink
      > -->

      <RouterLink to="#" @click="showNav = false">Filmes</RouterLink>
      <RouterLink to="#" @click="showNav = false">Reviews</RouterLink>
      <RouterLink to="#" @click="showNav = false">Listas</RouterLink>
      <RouterLink to="#" @click="showNav = false">Sobre</RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import MobileSearch from '../Molecules/MobileSearch.vue'

const showNav = ref(false)
const nav = ref(null)

onClickOutside(nav, () => {
  showNav.value = false
})
</script>

<style scoped>
.mobileNav {
  position: relative;
  z-index: 1;
  padding: 1rem 0;
}
.buttons {
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  gap: 1rem;
  font-weight: 800;
}
button {
  background-color: #0f0e17;
  color: #fffffe;
  border: none;
}

.active {
  color: #ff8906;
}
.close {
  max-height: 0;
  transition: all 0.3s ease-in-out;
}
.open {
  background-color: #0f0e17;
  max-height: 500px;
  transition: all 0.3s ease-in-out;
}

nav {
  margin-top: 1rem;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease-in;
  position: absolute;
}
a {
  width: 100%;
  padding: 0.6rem 1rem;
  text-decoration: none;
  color: #fffffe;
  font-size: 1.1rem;
  font-weight: 800;
  border-bottom: 1px solid #2c3641;
}

@media (min-width: 680px) {
  .mobileNav {
    display: none;
  }
}
</style>
