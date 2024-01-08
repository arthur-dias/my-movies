<template>
  <RouterLink :to="`/filme/${id}`">
    <div class="card">
      <img v-if="imageUrl" :src="`${url}${imageUrl}`" :alt="name" />
      <img
        class="cardBack"
        v-if="imageUrl"
        :src="`${url}${imageUrl}`"
        :alt="name"
      />
      <img v-else src="@/assets/images/fallback_poster.png" :alt="name" />
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
  cursor: pointer;
  transition: all 0.2s ease;
  max-width: 190px;
  height: 400px;
  border: 5px solid #fffffe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:hover {
  border: 5px solid #ff8906;
}

.cardBack {
  position: absolute;
  height: 393px;
  width: 180px;
  z-index: -1;
  filter: blur(5px);
  transform: scaleY(1);
  object-fit: cover;
}

@media (max-width: 680px) {
  .card {
    max-width: 139px;
    height: 250px;
  }

  .cardBack {
    width: 129px;
    height: 244px;
  }
}
</style>
