import { defineStore } from 'pinia'
import type {
  Movie,
  MovieCast,
  MovieCrew,
  MovieDetails,
  Person,
} from '@/types/types'
import getApiData from '@/api/getApiData'
import { shuffle } from '@/utils/utils'

const token = import.meta.env.VITE_TMDB_TOKEN

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
  movieDetails: MovieDetails | undefined
  movieCast: MovieCast[]
  movieCrew: MovieCrew[]
  loading: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () =>
    ({
      trendingMovies: [],
      topRatedMovies: [],
      popularPeople: [],
      movieDetails: undefined,
      movieCast: [],
      movieCrew: [],
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

    filteredMovieDirector(): MovieCrew[] {
      const crew = this.movieCrew
      const director = crew.filter((director) => director.job === 'Director')
      return director
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

    async getMovieCredits(query: string) {
      this.loading = true

      try {
        const data = await getApiData(query, options)
        this.movieCast = data.cast
        this.movieCrew = data.crew
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        console.log('CAST: ', this.movieCast)
        console.log('CREW: ', this.movieCrew)
        this.loading = false
      }
    },
  },
})
