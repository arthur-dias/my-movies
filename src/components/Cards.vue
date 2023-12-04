<template>
  <div class="cards">
    <h1>{{ title }}</h1>
    <div class="cardsWrapper">
      <Card
        v-for="movie in movies?.slice(0, maxCards ? maxCards : 10)"
        :key="movie.id"
        :image-url="movie.poster_path"
        :name="movie.title"
        :id="movie.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/types'
import Card from './Card.vue'

defineProps<{
  movies: Movie[] | undefined
  title: string
  maxCards?: number
}>()
</script>

<style scoped>
.cards {
  padding: 0 2rem;
}
h1 {
  color: #fffffe;
  font-weight: 800;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
}

.cardsWrapper {
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 5rem;
}

@media (max-width: 680px) {
  .cards {
    padding: 5rem 2rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .cardsWrapper {
    max-width: 100%;
    padding-top: 3rem;
  }
}
</style>
