import getRandomInRange from '../randomizer.js'

const createSequence = (start, step, length) => {
  const sequence = []
  for (let i = 0; i < length; i += 1) {
    const current = start + step * i
    sequence.push(current)
  }
  return sequence
}

const game = () => {
  const start = getRandomInRange(1, 30)
  const step = getRandomInRange(1, 10)
  const length = getRandomInRange(5, 10)
  const sequence = createSequence(start, step, length)
  const blankIndex = getRandomInRange(0, sequence.length - 1)
  const correctAnswer = String(sequence[blankIndex])

  sequence[blankIndex] = '..'

  const rules = 'What number is missing in the progression?'

  return [sequence.join(' '), correctAnswer, rules]
}

export default game
