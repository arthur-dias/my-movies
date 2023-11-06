export function getRandomNumber(maxNumber: number): number {
  const randomNumber = Math.floor(Math.random() * maxNumber)
  return randomNumber
}

export function formattedRating(voteAverage: number): string {
  const rating = voteAverage.toFixed(1)
  return rating
}

export default { getRandomNumber, formattedRating }
