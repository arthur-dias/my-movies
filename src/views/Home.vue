<template>
  <KeepAlive>
    <Hero :image-url="movieStore.movies[randomBackdrop]?.backdrop_path" />
  </KeepAlive>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import getRandomNumber from '@/utils/utils'
import Hero from '@/components/Hero.vue'

const movieStore = useMovieStore()
const query = 'trending/movie/week?language=pt-BR'

movieStore.getMoviesList(query)

const randomBackdrop = getRandomNumber(20)
</script>

<style scoped></style>
