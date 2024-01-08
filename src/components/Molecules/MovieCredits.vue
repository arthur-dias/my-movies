<template>
  <div class="cast">
    <h1>
      Elenco Principal
      <a
        :href="`https://www.imdb.com/title/${movieDetails?.imdb_id}`"
        target="_blank"
        rel="noreferrer"
      >
        <img src="@/assets/icons/imdb-icon.svg" alt="IMDB" class="imdbIcon" />
      </a>
    </h1>
    <div class="personWrapper">
      <Person
        v-for="person in cast?.slice(0, 14)"
        :key="person.id"
        :image-url="person.profile_path"
        :name="person.name"
        :character="person.character"
        :show-name="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MovieCast, MovieDetails } from '@/types/types'
import Person from '../Atoms/Person.vue'

defineProps<{
  cast: MovieCast[] | undefined
  movieDetails: MovieDetails | undefined
}>()
</script>

<style scoped>
.cast {
  max-width: 65%;
  margin: 2rem auto 4rem;
}
.cast > h1 {
  color: #fffffe;
  font-size: 2rem;
}

.cast > h1::before {
  background: #ff8906;
  border-radius: 4px;
  content: '';
  margin-left: -0.75rem;
  position: absolute;
  height: 30px;
  width: 4px;
}

.cast > h1 > a {
  display: inline-block;
  width: 50px;
  cursor: pointer;
}

.personWrapper {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
}

@media (max-width: 680px) {
  .cast {
    max-width: 100%;
  }
  .cast > h1 {
    font-size: 1.8rem;
    max-width: 85%;
    margin: 0 auto;
  }

  .personWrapper {
    gap: 1rem;
    justify-content: center;
  }
}
</style>
