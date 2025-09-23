const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))
  return { question, correctAnswer }
}

export default getQuestionAndAnswer
