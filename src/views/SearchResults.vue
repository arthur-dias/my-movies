<template>
  <div class="searchResults">
    <SearchResultsSkeleton v-if="movieStore.loadingFullSearchedMovies" />
    <SearchResults v-else :movies="movieStore.fullSearchedMovies" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import { searchMovieQuery } from '@/api/queries'
import SearchResultsSkeleton from '@/components/Skeleton/SearchResultsSkeleton.vue'
import SearchResults from '@/components/Molecules/SearchResults.vue'

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
</style>
