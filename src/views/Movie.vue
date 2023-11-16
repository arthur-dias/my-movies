<template>
  <div class="movie">
    <MovieDetails :movieInfos="movieStore.movieDetails" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { movieDetailsQuery } from '@/api/queries'
import { useMovieStore } from '@/stores/movieStore'
import MovieDetails from '@/components/MovieDetails.vue'

const movieStore = useMovieStore()
const route = useRoute()

const id = route.params.id

movieStore.getMovieDetails(movieDetailsQuery(id as string))
</script>

<style scoped></style>
