import { defineStore } from 'pinia'
import type { Movie } from '@/types/types'
import getMovies from '@/api/getMovies'
import { shuffle } from '@/utils/utils'

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
  getters: {
    filteredTrendingMovies(): Movie[] {
      return shuffle(this.trendingMovies)
    },

    filteredTopRatedMovies(): Movie[] {
      return shuffle(this.topRatedMovies)
    },
  },
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
      }
    },
  },
})
