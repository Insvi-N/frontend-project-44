
import runGame from '../index.js';

const taskDescription = 'What is the result of the expression?'
const gameMath = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
    
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
  }
  const question = `${firstNumber} ${operator} ${secondNumber}`

  return {
    question,
    correctAnswer
  }

}

const runCalcGame = () => {
  runGame(taskDescription, gameMath);
};

export default runCalcGame;