interface apiOptions {
  method: string
  headers: {
    accept: string
    Authorization: string
  }
}

async function getMovies(url: string, options: apiOptions) {
  const res = await fetch(`https://api.themoviedb.org/3/${url}`, options)
  const data = await res.json()

  return data
}

export default getMovies
