interface Genre {
  id: number
  name: string
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: Genre[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Service {
  id: number
  text: string
  inProduction: boolean
}

export interface Person {
  adult: boolean
  id: number
  name: string
  original_name: string
  media_type: string
  popularity: number
  gender: number
  known_for_department: string
  profile_path: string
  known_for: Movie[]
}

interface ProductionCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface ProductionCountries {
  iso_3166_1: string
  name: string
}

interface SpokenLanguages {
  english_name: string
  iso_639_1: string
  name: string
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompanies[]
  production_countries: ProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguages[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
