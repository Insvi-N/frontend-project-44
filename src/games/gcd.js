
import runGame from '../index.js';

const taskDescription = 'Find the greatest common divisor of given numbers.'
const gameMath = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  let divisor = Math.min(firstNumber, secondNumber);
  let correctAnswer;

  while (divisor > 0) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      correctAnswer = divisor;
      break;
    }
    divisor -= 1;
  }
  const question = `${firstNumber} ${secondNumber}`

  return {
    question,
    correctAnswer
  }

}

const runGCDGame = () => {
  runGame(taskDescription, gameMath);
};

export default runGCDGame;