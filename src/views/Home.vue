<template>
  <Hero :image-url="movieStore.movies[randomBackdrop]?.backdrop_path" />
  <Cards
    :movies="movieStore.movies"
    title="Filmes populares no momento"
    :max-cards="4"
  />
  <Services :services="services" />
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { getRandomNumber } from '@/utils/utils'
import { services } from '@/data/services'
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'
import Services from '@/components/Services.vue'

const movieStore = useMovieStore()
const query = 'trending/movie/week?language=pt-BR'

movieStore.getMoviesList(query)

const randomBackdrop = getRandomNumber(20)
</script>

<style scoped></style>
