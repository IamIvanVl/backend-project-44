import askUserName from './cli.js'
import readlineSync from 'readline-sync'

const roundsCount = 3

const engine = (game) => {
  const userName = askUserName()
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer, rules] = game()

    console.log(rules)

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    if (userAnswer === rightAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default engine
