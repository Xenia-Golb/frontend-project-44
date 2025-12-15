import { generateNumber } from '../utils/utils.js'

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const getQuestionAndAnswer = () => {
  const number = generateNumber(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default getQuestionAndAnswer
