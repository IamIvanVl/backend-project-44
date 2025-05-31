import getRandomInRange from '../randomizer.js'

const isPrime = (number) => {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

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
