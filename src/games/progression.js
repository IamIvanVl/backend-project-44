import createSequence from '../createSequence.js'
import getRandomInRange from '../randomizer.js'

const game = () => {
  const start = getRandomInRange(1, 30)
  const step = getRandomInRange(1, 10)
  const length = getRandomInRange(5, 10)
  const sequence = createSequence(start, step, length)
  const blankIndex = getRandomInRange(0, sequence.length - 1)
  const correctAnswer = String(sequence[blankIndex])

  sequence[blankIndex] = '..'

  console.log('What number is missing in the progression?')

  return [sequence.join(' '), correctAnswer]
}

export default game
