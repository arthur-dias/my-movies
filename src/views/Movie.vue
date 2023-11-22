<template>
  <RouterView>
    <div class="movie">
      <MovieDetails
        :movieDetails="movieStore.movieDetails"
        :movie-director="movieStore.filteredMovieDirector"
      />
      <MovieCredits
        :cast="movieStore.movieCast"
        :movieDetails="movieStore.movieDetails"
      />
      <Cards
        v-show="movieStore.recommendedMovies.length !== 0"
        :movies="movieStore.recommendedMovies"
        title="Você pode também gostar desses"
        :max-cards="5"
      />
    </div>
  </RouterView>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import {
  movieCreditsQuery,
  movieDetailsQuery,
  recommendedMoviesQuery,
} from '@/api/queries'
import { useMovieStore } from '@/stores/movieStore'
import MovieDetails from '@/components/MovieDetails.vue'
import MovieCredits from '@/components/MovieCredits.vue'
import Cards from '@/components/Cards.vue'

const movieStore = useMovieStore()
const route = useRoute()

const id = route.params.id

movieStore.getMovieDetails(movieDetailsQuery(id as string))
movieStore.getMovieCredits(movieCreditsQuery(id as string))
movieStore.getRecommendedMoviesList(recommendedMoviesQuery(id as string))

onBeforeRouteUpdate((to, from) => {
  movieStore.getMovieDetails(movieDetailsQuery(to.params.id as string))
  movieStore.getMovieCredits(movieCreditsQuery(to.params.id as string))
  movieStore.getRecommendedMoviesList(
    recommendedMoviesQuery(to.params.id as string)
  )
})
</script>

<style scoped>
.movie {
  padding-top: 3rem;
}
</style>
