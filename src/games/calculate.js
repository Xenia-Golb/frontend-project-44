import { generateNumber } from '../utils/utils.js'

const getRandomNumber = (min = 1, max = 100) => {
  return generateNumber(min, max)
}

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = generateNumber(0, operators.length - 1)
  return operators[randomIndex]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))
  return [question, correctAnswer]
}

export default getQuestionAndAnswer
