<template>
  <div>
    <h1 style="color: aliceblue">
      {{ movieStore.movieDetails.overview }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { movieDetailsQuery } from '@/api/queries'
import { useMovieStore } from '@/stores/movieStore'
import { useRoute } from 'vue-router'

const movieStore = useMovieStore()
const route = useRoute()

const id = route.params.id

movieStore.getMovieDetails(movieDetailsQuery(id as string))
console.log(movieStore.movieDetails)
</script>

<style scoped></style>
