<template>
  <Hero :image-url="movieStore.trendingMovies[randomBackdrop]?.backdrop_path" />
  <Cards
    :movies="movieStore.trendingMovies"
    title="Filmes populares no momento"
    :max-cards="4"
  />
  <Services :services="services" />
  <Cards
    :movies="movieStore.topRatedMovies"
    title="Filmes mais bem avaliados"
    :max-cards="10"
  />
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { getRandomNumber } from '@/utils/utils'
import { services } from '@/data/services'
import { trendingQuery, topRatedQuery } from '@/api/queries'
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'
import Services from '@/components/Services.vue'

const movieStore = useMovieStore()

movieStore.getTrendingMoviesList(trendingQuery)
movieStore.getTopRatedMoviesList(topRatedQuery)

const randomBackdrop = getRandomNumber(20)
</script>

<style scoped></style>
