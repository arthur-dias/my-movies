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
  trendingMovies: Movie[]
  topRatedMovies: Movie[]
  loading: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () =>
    ({
      trendingMovies: [],
      topRatedMovies: [],
      loading: false,
    } as State),
  getters: {},
  actions: {
    async getTrendingMoviesList(query: string) {
      this.loading = true

      try {
        const data = await getMovies(query, options)
        this.trendingMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
        console.log('Trending movies: ', this.trendingMovies)
      }
    },

    async getTopRatedMoviesList(query: string) {
      this.loading = true

      try {
        const data = await getMovies(query, options)
        this.topRatedMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
        console.log('Top rated movies', this.topRatedMovies)
      }
    },
  },
})
