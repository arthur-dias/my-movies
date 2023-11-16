<template>
  <div class="movieDetails">
    <div class="titleDetails">
      <h1>{{ movieInfos?.title }}</h1>
      <p>Título original: {{ movieInfos?.original_title }}</p>
      <div class="movieFatcs">
        <p>
          {{ movieInfos?.release_date.slice(0, 4) }}
        </p>
        <p>{{ movieInfos?.runtime }} min</p>
      </div>
      <div class="genres">
        <Tag
          v-for="genre in movieInfos?.genres"
          :tag="genre.name"
          :key="genre.id"
        />
      </div>
    </div>
    <div class="movieDescription">
      <img
        v-if="movieInfos?.poster_path"
        :src="`${url}${movieInfos?.poster_path}`"
        :alt="movieInfos?.title"
      />
      <div class="descriptionText">
        <h2>
          <em>
            {{ movieInfos?.tagline }}
          </em>
        </h2>
        <p>
          {{ movieInfos?.overview }}
        </p>
      </div>
    </div>
    <div class="otherInfo">
      <h2>Outras informações</h2>
      <a
        :href="`https://www.imdb.com/title/${movieInfos?.imdb_id}`"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/icons/imdb-icon.svg" alt="IMDB" class="imdbIcon" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MovieDetails } from '@/types/types'
import Tag from './Tag.vue'

defineProps<{
  movieInfos: MovieDetails | undefined
}>()

const url = 'https://image.tmdb.org/t/p/w200/'
</script>

<style scoped>
.movieDetails {
  padding: 0 20rem;
}

.titleDetails {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fffffe;
}

.titleDetails > p {
  font-weight: 500;
  font-size: 0.9rem;
  color: #919191;
}

.titleDetails > h1 {
  font-size: 2.5rem;
  font-weight: 500;
}

.movieFatcs {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.movieFatcs > p {
  font-weight: 500;
  font-size: 0.9rem;
  color: #919191;
}

.movieFatcs > p::before {
  font-size: 1rem;
  line-height: 1;
  content: '•';
  height: 100%;
  position: relative;
  top: 0px;
  left: 0px;
  display: inline-flex;
  align-content: center;
  margin-right: 0.2rem;
}

.genres {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.movieDescription {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
}

.descriptionText {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2rem;
}

.descriptionText > h2 {
  width: 100%;
  text-align: center;
  color: #fffffe;
  font-weight: 500;
}

.descriptionText > p {
  line-height: 1.5;
  color: #fffffe;
}

.otherInfo {
  color: #fffffe;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fffffe;
}

.otherInfo > a {
  width: 50px;
  cursor: pointer;
}
</style>
