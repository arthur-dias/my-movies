<template>
  <div class="movieDetails">
    <div class="titleDetails">
      <h1>{{ movieDetails?.title }}</h1>
      <p>Título original: {{ movieDetails?.original_title }}</p>
      <div class="movieFatcs">
        <p>
          {{ movieDetails?.release_date.slice(0, 4) }}
        </p>
        <p>{{ movieDetails?.runtime }} min</p>
        <p>Diretor: {{ movieDirector[0].name }}</p>
      </div>
      <div class="genres">
        <Tag
          v-for="genre in movieDetails?.genres"
          :tag="genre.name"
          :key="genre.id"
        />
      </div>
    </div>
    <div class="movieDescription">
      <img
        v-if="movieDetails?.poster_path"
        :src="`${url}${movieDetails?.poster_path}`"
        :alt="movieDetails?.title"
      />
      <div class="descriptionText">
        <h2 v-if="movieDetails?.tagline">
          <em>
            {{ movieDetails?.tagline }}
          </em>
        </h2>
        <p>
          {{ movieDetails?.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MovieCrew, MovieDetails as MovieDetailsType } from '@/types/types'
import Tag from './Tag.vue'

defineProps<{
  movieDetails: MovieDetailsType | undefined
  movieDirector: MovieCrew[]
}>()

const url = 'https://image.tmdb.org/t/p/w200/'
</script>

<style scoped>
.movieDetails {
  max-width: 65%;
  margin: 0 auto;
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
  flex-wrap: wrap;
  gap: 1rem;
}

.movieDescription {
  padding-top: 2rem;
  max-width: 85%;
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

@media (max-width: 680px) {
  .movieDetails {
    max-width: 85%;
  }

  .titleDetails > h1 {
    font-size: 1.8rem;
  }
  .movieDescription {
    flex-direction: column;
    align-items: center;
  }
}
</style>
