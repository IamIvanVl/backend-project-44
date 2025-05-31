import getRandomInRange from '../randomizer.js'

const getResult = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return String(firstNumber + secondNumber)
    case '-':
      return String(firstNumber - secondNumber)
    case '*':
      return String(firstNumber * secondNumber)
  }
}

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInRange(0, 2)]
  const expression = `${firstNumber} ${String(operator)} ${secondNumber}`

  const correctAnswer = getResult(firstNumber, secondNumber, operator)

  console.log('What is the result of the expression?')

  return [expression, correctAnswer]
}

export default game
