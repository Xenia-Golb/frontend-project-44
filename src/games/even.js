import readlineSync from 'readline-sync'

import { generateNumber } from '../utils/utils.js'

const isEven = num => num % 2 === 0

function playEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = generateNumber(1, 100)
    console.log(`Question: ${number}`)

    const userAnswer = readlineSync
      .question('Your answer: ')
      .toLowerCase()
      .trim()

    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
export default playEvenGame
