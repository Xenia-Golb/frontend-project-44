import { generateNumber } from '../utils/utils.js'

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getQuestionAndAnswer = () => {
  const num1 = generateNumber(1, 100)
  const num2 = generateNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))
  return { question, correctAnswer }
}

export default getQuestionAndAnswer
