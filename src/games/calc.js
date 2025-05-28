import getRandomInRange from '../randomizer.js'

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)
  const operators = ['+', '-', '*']

  const [expression, correctAnswer] = (() => {
    switch (operators[getRandomInRange(0, 2)]) {
      case '+':
        return [`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)]
      case '-':
        if (firstNumber > secondNumber) {
          return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)]
        }
        else {
          return [`${secondNumber} - ${firstNumber}`, String(secondNumber - firstNumber)]
        }
      case '*':
        return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)]
    }
  })()

  console.log('What is the result of the expression?')

  return [expression, correctAnswer]
}

export default game