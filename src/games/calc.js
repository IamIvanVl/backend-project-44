import getRandomInRange from '../randomizer.js'

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
  }
}

const game = () => {
  const firstNumber = getRandomInRange(1, 100)
  const secondNumber = getRandomInRange(1, 100)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInRange(0, 2)]
  const expression = `${firstNumber} ${String(operator)} ${secondNumber}`
  const rules = 'What is the result of the expression?'
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator))

  return [expression, correctAnswer, rules]
}

export default game
