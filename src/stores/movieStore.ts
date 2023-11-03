import { defineStore } from 'pinia'
import type { Movie } from '@/types/types'
import getMovies from '@/api/getMovies'

const token: string = import.meta.env.TMDB_TOKEN

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
}

interface State {
  movies: Movie[]
  loading: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () =>
    ({
      movies: [],
      loading: false,
    } as State),
  getters: {},
  actions: {
    async getMoviesList(query: string) {
      this.loading = true

      try {
        const data = await getMovies(query, options)
        this.movies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
      }
    },
  },
})
