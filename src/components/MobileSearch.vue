<template>
  <div class="mobileSearchBar" ref="mobileSearchBar">
    <div class="inputWrapper">
      <input
        v-model="searchTerm"
        type="search"
        @keyup.enter="handleSearch"
        @keyup.esc="clearInput"
        placeholder="Pesquisar filmes"
      />
    </div>

    <div class="searchPreview" v-show="!showSearchPreview">
      <RouterLink
        v-for="result in movieStore.searchedMovies.slice(0, 5)"
        :key="result.id"
        :to="`/filme/${result.id}`"
        @click="clearInput"
        class="result"
      >
        <img
          v-if="result.poster_path"
          :src="`${url}${result.poster_path}`"
          :alt="result.title"
        />
        <img
          v-else
          src="../assets/images/fallback_poster.png"
          :alt="result.title"
        />

        <div>
          <p class="title">
            {{ result.title }}
          </p>
          <p class="year">Ano: {{ result.release_date.slice(0, 4) }}</p>
        </div>
      </RouterLink>
      <RouterLink to="#" class="seeMore" v-show="searchTerm">
        <p>Ver todos os resultados para "{{ searchTerm }}"</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside, watchDebounced } from '@vueuse/core'
import { useMovieStore } from '@/stores/movieStore'
import { searchMovieQuery } from '@/api/queries'
import { useRouter } from 'vue-router'

const router = useRouter()
const movieStore = useMovieStore()

const searchTerm = ref('')
const showSearchPreview = ref(false)
const mobileSearchBar = ref(null)

const url = 'https://image.tmdb.org/t/p/w92/'

function handleSearch() {
  router.push({ path: `/buscar/${searchTerm.value}` })
  clearInput()
}

function clearInput() {
  showSearchPreview.value = false
  searchTerm.value = ''
  return
}

watchDebounced(
  searchTerm,
  () => {
    movieStore.getSearchedMoviesList(searchMovieQuery(searchTerm.value))
  },
  { debounce: 500, maxWait: 1000 }
)

onClickOutside(mobileSearchBar, () => {
  clearInput()
})
</script>

<style scoped>
.mobileSearchBar {
  margin-top: 1rem;
}

.inputWrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.inputWrapper > input {
  width: 300px;
  border-radius: 5px;
  height: 30px;
  border: none;
  padding-left: 0.5rem;
}

.inputWrapper > input:focus {
  outline: none;
  box-shadow: 0px 0px 10px 3px rgba(255, 137, 6, 0.75);
}

.searchPreview {
  position: absolute;
  background: #1f1c2b;
  margin-top: 1rem;
  width: 100%;
}

.result {
  padding: 0.5rem 0.5rem;
  min-height: 92px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  text-decoration: none;
  border-bottom: 1px solid gray;
  transition: all 0.1s ease-in-out;
}

.result:hover,
.seeMore:hover {
  background: #2c283c;
}

.result > img {
  max-width: 50px;
}

.title {
  color: #fffffe;
}

.year {
  margin-top: 0.5rem;
  color: #919191;
}

.seeMore {
  padding: 1rem;
  text-decoration: none;
  display: block;
  width: 300px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.seeMore > p {
  color: #919191;
}
</style>
