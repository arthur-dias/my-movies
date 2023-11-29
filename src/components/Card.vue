<template>
  <RouterLink :to="`/filme/${id}`">
    <div class="card">
      <img v-if="imageUrl" :src="`${url}${imageUrl}`" :alt="name" />
      <img v-else src="../assets/images/fallback_poster.png" :alt="name" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  imageUrl: string | undefined
  name: string
  id: number
}>()

const url = 'https://image.tmdb.org/t/p/w342/'
</script>

<style scoped>
.card {
  max-width: 285px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card:hover {
  opacity: 0.7;
}

@media (max-width: 680px) {
  .card {
    max-width: 139px;
  }
}
</style>
