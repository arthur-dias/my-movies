import { defineStore } from 'pinia'
import type {
  Movie,
  MovieCast,
  MovieCrew,
  MovieDetails,
  Person,
  SearchMovieResults,
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
  recommendedMovies: Movie[]
  popularPeople: Person[]
  movieDetails: MovieDetails | undefined
  movieCast: MovieCast[]
  movieCrew: MovieCrew[]
  searchedMovies: SearchMovieResults[]
  fullSearchedMovies: SearchMovieResults[]
  loading: boolean
  loadingTrendingMovies: boolean
  loadingMovieDetails: boolean
  loadingMovieCredits: boolean
  loadingSearchedMovies: boolean
  loadingFullSearchedMovies: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () =>
    ({
      trendingMovies: [],
      topRatedMovies: [],
      popularPeople: [],
      recommendedMovies: [],
      movieDetails: undefined,
      movieCast: [],
      movieCrew: [],
      searchedMovies: [],
      fullSearchedMovies: [],
      loading: false,
      loadingTrendingMovies: false,
      loadingMovieDetails: false,
      loadingMovieCredits: false,
      loadingSearchedMovies: false,
      loadingFullSearchedMovies: false,
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
      this.loadingTrendingMovies = true

      try {
        const data = await getApiData(query, options)
        this.trendingMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loadingTrendingMovies = false
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

    async getRecommendedMoviesList(query: string) {
      this.loading = true

      try {
        const data = await getApiData(query, options)
        this.recommendedMovies = data.results
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
      this.loadingMovieDetails = true

      try {
        const data = await getApiData(query, options)
        this.movieDetails = data
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loadingMovieDetails = false
      }
    },

    async getMovieCredits(query: string) {
      this.loadingMovieCredits = true

      try {
        const data = await getApiData(query, options)
        this.movieCast = data.cast
        this.movieCrew = data.crew
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loadingMovieCredits = false
      }
    },

    async getSearchedMoviesList(query: string) {
      this.loadingSearchedMovies = true

      try {
        const data = await getApiData(query, options)
        this.searchedMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loadingSearchedMovies = false
      }
    },

    async getFullSearchedMoviesList(query: string) {
      this.loadingFullSearchedMovies = true

      try {
        const data = await getApiData(query, options)
        this.fullSearchedMovies = data.results
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        this.loadingFullSearchedMovies = false
      }
    },
  },
})
