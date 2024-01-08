<template>
  <HeroSkeleton v-if="movieStore.loadingTrendingMovies" />
  <Hero
    v-else
    :image-url="movieStore.trendingMovies[randomBackdrop]?.backdrop_path"
  />
  <Cards
    :movies="movieStore.filteredTrendingMovies"
    title="Filmes populares essa semana"
    :max-cards="10"
  />
  <Services :services="services" />
  <Cards
    :movies="movieStore.filteredTopRatedMovies"
    title="Filmes mais bem avaliados"
    :max-cards="5"
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
import HeroSkeleton from '@/components/Skeleton/HeroSkeleton.vue'
import Cards from '@/components/Molecules/Cards.vue'
import Services from '@/components/Molecules/Services.vue'
import Persons from '@/components/Molecules/Persons.vue'
import Hero from '@/components/Organisms/Hero.vue'

const randomBackdrop = getRandomNumber(20)

const movieStore = useMovieStore()

movieStore.getTrendingMoviesList(trendingMoviesQuery)
movieStore.getTopRatedMoviesList(topRatedQuery)
movieStore.getTrendingPersonsList(popularPeopleQuery)
</script>

<style scoped></style>
