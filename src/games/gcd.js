import getRandomInRange from '../randomizer.js'

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)

  const question = `${firstNumber} ${secondNumber}`

  const rules = 'Find the greatest common divisor of given numbers.'

  const greatestDivisor = (() => {
    let a = firstNumber
    let b = secondNumber

    if (b === 0) {
      return String(a)
    }

    while (b != 0) {
      const temp = a
      a = b
      b = temp % b
    }
    return String(a)
  })()

  return [question, greatestDivisor, rules]
}

export default game
