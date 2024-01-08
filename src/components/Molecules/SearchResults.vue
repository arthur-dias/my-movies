<template>
  <div class="resultList">
    <h1 class="title">Resultados para: "{{ query }}"</h1>

    <div class="result" v-for="result in movies" :key="result.id">
      <RouterLink :to="`/filme/${result.id}`">
        <img
          v-if="result.poster_path"
          :src="`${url}${result.poster_path}`"
          :alt="result.title"
        />
        <img
          v-else
          src="@/assets/images/fallback_poster.png"
          :alt="result.title"
        />
      </RouterLink>
      <div class="info">
        <RouterLink :to="`/filme/${result.id}`">
          <p class="movieTitle">{{ result.title }}</p>
        </RouterLink>
        <div class="additionalInfo">
          <p class="year">Ano: {{ result.release_date.slice(0, 4) }}</p>
          <p class="originalTitle">
            Título original: ({{ result.original_title }})
          </p>
        </div>
        <p class="overview">{{ result.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import type { SearchMovieResults } from '@/types/types'
import { useRoute } from 'vue-router'

defineProps<{
  movies: SearchMovieResults[]
}>()

const url = 'https://image.tmdb.org/t/p/w92/'

const route = useRoute()
const query = route.params.query

const movieStore = useMovieStore()
movieStore.searchedMovies
</script>

<style scoped>
.resultList {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  max-width: 65%;
  margin: 0 auto;
  gap: 1.5rem;
}

.title {
  align-self: center;
  color: #fffffe;
  font-weight: 500;
  font-size: 2.5rem;
  margin-bottom: 5rem;
}

.result {
  min-width: 100%;
  min-height: 170px;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
  background: #1f1c2b;
  padding: 1rem;
  border-radius: 5px;
}

img {
  max-width: 92px;
  min-width: 92px;
}

img:hover {
  box-shadow: 0px 0px 5px 0px rgba(255, 137, 6, 0.75);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info > a {
  text-decoration: none;
  width: fit-content;
}

.additionalInfo {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.movieTitle {
  color: #fffffe;
  font-weight: 500;
}
.movieTitle:hover {
  color: #ff8906;
}

.year,
.originalTitle {
  color: #919191;
}

.overview {
  color: #fffffe;
  line-height: 1.5;
}

@media (max-width: 680px) {
  .resultList {
    max-width: 85%;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .additionalInfo {
    flex-direction: column;
  }

  .year,
  .originalTitle {
    font-size: 0.9rem;
  }

  .overview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
