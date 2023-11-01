<template>
  <div class="mainNav">
    <nav>
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/filmes">Filmes</RouterLink>
      <RouterLink active-class="active" to="/reviews">Reviews</RouterLink>
      <RouterLink active-class="active" to="/listas">Listas</RouterLink>
      <RouterLink active-class="active" to="/sobre">Sobre</RouterLink>
    </nav>
  </div>
  <MobileNav />
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MobileNav from './MobileNav.vue'
</script>

<style scoped>
.mainNav {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

a {
  text-decoration: none;
  color: #fffffe;
  font-size: 1.1rem;
  font-weight: 800;
}

a:hover {
  color: #a7a9be;
}

.active {
  color: #ff8906;
}

@media (max-width: 480px) {
  .mainNav {
    display: none;
  }
}
</style>
