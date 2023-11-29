<template>
  <h1 style="color: aliceblue">Search Results</h1>

  <div v-for="item in movieStore.fullSearchedMovies" :key="item.id">
    <p style="color: aliceblue">
      {{ item.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import { searchMovieQuery } from '@/api/queries'

const route = useRoute()
const movieStore = useMovieStore()

const query = route.params.query

movieStore.getFullSearchedMoviesList(searchMovieQuery(query as string))

onBeforeRouteUpdate((to, from) => {
  movieStore.getFullSearchedMoviesList(
    searchMovieQuery(to.params.query as string)
  )
})
</script>

<style scoped></style>
