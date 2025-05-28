import askUserName from './cli.js'
import readlineSync from 'readline-sync'

const multiply = (func) => {
  const userName = askUserName()
  for (let i = 0; i < 3; i += 1) {
    const [randomNumber, rightAnswer] = func()

    console.log(`Question: ${randomNumber}`)

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

export default multiply
