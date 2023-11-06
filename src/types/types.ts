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
