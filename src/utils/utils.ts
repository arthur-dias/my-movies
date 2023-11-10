import type { Movie } from '@/types/types'

export function getRandomNumber(maxNumber: number): number {
  const randomNumber = Math.floor(Math.random() * maxNumber)
  return randomNumber
}

export function formattedRating(voteAverage: number): string {
  const rating = voteAverage.toFixed(1)
  return rating
}

export function shuffle(array: Movie[]): Movie[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default { getRandomNumber, formattedRating, shuffle }
