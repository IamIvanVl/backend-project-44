import getRandomInRange from '../randomizer.js'

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const game = () => {
  const randomNumber = getRandomInRange(1, 100)

  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no'

  return [randomNumber, rightAnswer, rules]
}

export default game
