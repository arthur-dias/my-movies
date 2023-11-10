<template>
  <Hero :image-url="movieStore.trendingMovies[randomBackdrop]?.backdrop_path" />
  <Cards
    :movies="movieStore.filteredTrendingMovies"
    title="Filmes populares essa semana"
  />
  <Services :services="services" />
  <Cards
    :movies="movieStore.filteredTopRatedMovies"
    title="Filmes mais bem avaliados"
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
