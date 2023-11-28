export const trendingMoviesQuery: string = 'trending/movie/day?language=pt-BR'

export const topRatedQuery: string = 'movie/top_rated?language=pt-BR&page=1'

export const popularPeopleQuery: string = 'person/popular?language=pt-BR&page=1'

export const movieDetailsQuery = (id: string) => `movie/${id}?language=pt-BR`

export const movieCreditsQuery = (id: string) =>
  `movie/${id}/credits?language=pt-BR`

export const recommendedMoviesQuery = (id: string) =>
  `movie/${id}/recommendations?language=pt-BR&page=1`

export const searchMovieQuery = (query: string) =>
  `search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`
