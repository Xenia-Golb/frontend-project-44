import readlineSync from 'readline-sync'

const isEven = num => num % 2 === 0

function playEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
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
