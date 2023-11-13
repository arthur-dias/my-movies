import { defineStore } from 'pinia'
import type { Movie, MovieDetails, Person } from '@/types/types'
import getApiData from '@/api/getApiData'
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
  popularPeople: Person[]
  movieDetails: MovieDetails[]
  loading: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () =>
    ({
      trendingMovies: [],
      topRatedMovies: [],
      popularPeople: [],
      movieDetails: [],
      loading: false,
    } as State),
  getters: {
    filteredTrendingMovies(): Movie[] {
      return shuffle(this.trendingMovies)
    },

    filteredTopRatedMovies(): Movie[] {
      return shuffle(this.topRatedMovies)
    },

    filteredPopularPeople(): Person[] {
      return shuffle(this.popularPeople)
    },
  },
  actions: {
    async getTrendingMoviesList(query: string) {
      this.loading = true

      try {
        const data = await getApiData(query, options)
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
        const data = await getApiData(query, options)
        this.topRatedMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    async getTrendingPersonsList(query: string) {
      this.loading = true

      try {
        const data = await getApiData(query, options)
        this.popularPeople = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    async getMovieDetails(query: string) {
      this.loading = true

      try {
        const data = await getApiData(query, options)
        this.movieDetails = data
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loading = false
      }
    },
  },
})
