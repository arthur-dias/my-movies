<template>
  <div class="person">
    <img :src="`${url}${imageUrl}`" :alt="name" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
}>()

const url = 'https://image.tmdb.org/t/p/w185/'
</script>

<style scoped>
.person {
  max-width: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.person:hover {
  opacity: 0.7;
}

@media (max-width: 680px) {
  .person {
    max-width: 77px;
  }
}
</style>
