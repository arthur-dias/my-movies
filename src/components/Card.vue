<template>
  <div class="card">
    <img :src="`${url}${imageUrl}`" alt="{{ name }}" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
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
