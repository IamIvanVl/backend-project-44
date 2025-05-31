import getRandomInRange from '../randomizer.js'

const game = () => {
  const randomNumber = getRandomInRange(1, 100)
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

  const isEven = randomNumber % 2 === 0
  const rightAnswer = isEven ? 'yes' : 'no'

  return [randomNumber, rightAnswer, rules]
}

export default game
