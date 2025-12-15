import { generateNumber } from '../utils/utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getQuestionAndAnswer = () => {
  const start = generateNumber(1, 100)
  const step = generateNumber(1, 10)
  const length = 10
  const hiddenIndex = generateNumber(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

export default getQuestionAndAnswer
