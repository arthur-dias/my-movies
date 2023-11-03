export default function getRandomNumber(maxNumber: number): number {
  const randomNumber = Math.floor(Math.random() * maxNumber)
  return randomNumber
}
