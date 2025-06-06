import getRandomInRange from '../randomizer.js'

const getGcd = (a, b) => b === 0 ? a : getGcd(b, a % b)

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)
  const rules = 'Find the greatest common divisor of given numbers.'
  const question = `${firstNumber} ${secondNumber}`

  const greatestDivisor = String(getGcd(firstNumber, secondNumber))

  return [question, greatestDivisor, rules]
}

export default game
