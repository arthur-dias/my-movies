<template>
  <HeroSkeleton v-if="movieStore.loadingTrendingMovies" />
  <Hero
    v-else
    :image-url="movieStore.trendingMovies[randomBackdrop]?.backdrop_path"
  />
  <Cards
    :movies="movieStore.filteredTrendingMovies"
    title="Filmes populares essa semana"
  />
  <Services :services="services" />
  <Cards
    :movies="movieStore.filteredTopRatedMovies"
    title="Filmes mais bem avaliados"
  />
  <Persons
    :persons="movieStore.filteredPopularPeople"
    title="Atores e atrizes em alta no momento"
    :max-persons="16"
  />
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { getRandomNumber } from '@/utils/utils'
import { services } from '@/data/services'
import {
  trendingMoviesQuery,
  topRatedQuery,
  popularPeopleQuery,
} from '@/api/queries'
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'
import Services from '@/components/Services.vue'
import Persons from '@/components/Persons.vue'
import HeroSkeleton from '@/components/Skeleton/HeroSkeleton.vue'

const movieStore = useMovieStore()

movieStore.getTrendingMoviesList(trendingMoviesQuery)
movieStore.getTopRatedMoviesList(topRatedQuery)
movieStore.getTrendingPersonsList(popularPeopleQuery)

const randomBackdrop = getRandomNumber(20)
</script>

<style scoped></style>
