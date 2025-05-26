import getRandomInRange from '../randomizer.js'
import readlineSync from 'readline-sync'

const game = () => {
  const randomNumber = getRandomInRange(1, 100)

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

  return [randomNumber, rightAnswer]
}

export default game
