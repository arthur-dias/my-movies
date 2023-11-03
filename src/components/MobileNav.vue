<template>
  <div class="mobileNav">
    <div class="buttons">
      <button>Login</button>
      <button @click="show = !show" :class="{ active: show }">Menu</button>
    </div>
    <nav :class="{ close: !show, open: show }">
      <RouterLink active-class="active" to="/" @click="show = false"
        >Home</RouterLink
      >
      <RouterLink active-class="active" to="/filmes" @click="show = false"
        >Filmes</RouterLink
      >
      <RouterLink active-class="active" to="/reviews" @click="show = false"
        >Reviews</RouterLink
      >
      <RouterLink active-class="active" to="/listas" @click="show = false"
        >Listas</RouterLink
      >
      <RouterLink active-class="active" to="/sobre" @click="show = false"
        >Sobre</RouterLink
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const show = ref(false)
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
