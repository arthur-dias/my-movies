<template>
  <div class="searchResults">
    <h1 class="title">Resultados para: "{{ query }}"</h1>
    <SearchResults :movies="movieStore.fullSearchedMovies" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import { searchMovieQuery } from '@/api/queries'
import SearchResults from '@/components/SearchResults.vue'

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

<style scoped>
.searchResults {
  padding-top: 3rem;
}

.title {
  text-align: center;
  color: #fffffe;
  font-weight: 500;
  font-size: 2.5rem;
  margin-bottom: 5rem;
}
</style>
