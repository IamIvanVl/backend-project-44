import getRandomInRange from '../randomizer.js'

const getGCD = (a, b) => {
  if (b === 0) {
    return String(a)
  }

  while (b != 0) {
    const temp = a
    a = b
    b = temp % b
  }
  return String(a)
}

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)
  const rules = 'Find the greatest common divisor of given numbers.'
  const question = `${firstNumber} ${secondNumber}`

  const greatestDivisor = getGCD(firstNumber, secondNumber)

  return [question, greatestDivisor, rules]
}

export default game
