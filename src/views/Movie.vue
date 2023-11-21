<template>
  <div class="movie">
    <MovieDetails :movieDetails="movieStore.movieDetails" />
    <MovieCredits
      :cast="movieStore.movieCast"
      :movieDetails="movieStore.movieDetails"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { movieCreditsQuery, movieDetailsQuery } from '@/api/queries'
import { useMovieStore } from '@/stores/movieStore'
import MovieDetails from '@/components/MovieDetails.vue'
import MovieCredits from '@/components/MovieCredits.vue'

const movieStore = useMovieStore()
const route = useRoute()

const id = route.params.id

movieStore.getMovieDetails(movieDetailsQuery(id as string))
movieStore.getMovieCredits(movieCreditsQuery(id as string))
</script>

<style scoped>
.movie {
  padding-top: 3rem;
}
</style>
