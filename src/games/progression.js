const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 10)
  const step = getRandomNumber(2, 5)
  const length = 10
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = generateProgression(start, step, length)

  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return { question, correctAnswer }
}

export default getQuestionAndAnswer
