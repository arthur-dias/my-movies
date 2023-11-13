<template>
  <div class="movie">
    <MovieDescription :movieInfos="movieStore.movieDetails" />
  </div>
</template>

<script setup lang="ts">
import { movieDetailsQuery } from '@/api/queries'
import { useMovieStore } from '@/stores/movieStore'
import { useRoute } from 'vue-router'
import MovieDescription from '@/components/MovieDescription.vue'

const movieStore = useMovieStore()
const route = useRoute()

const id = route.params.id

movieStore.getMovieDetails(movieDetailsQuery(id as string))
console.log('MOVIE PAGE', movieStore.movieDetails)
</script>

<style scoped></style>
