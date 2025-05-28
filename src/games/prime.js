import getRandomInRange from '../randomizer.js'
import isPrime from '../isPrime.js'

const game = () => {
  const question = getRandomInRange(1, 100)
  const isQuestionPrime = isPrime(question)

  let correctAnswer

  if (isQuestionPrime === true) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  return [question, correctAnswer]
}

export default game
