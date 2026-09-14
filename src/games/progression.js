
import runGame from '../index.js';

const taskDescription = 'What number is missing in the progression?'
const gameMath = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const progressionStep = Math.floor(Math.random() * 10) + 1;
  const progressionLength = Math.floor(Math.random() * 6) + 5;

  const progression = [];

  let currentNumber = firstNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(currentNumber);
    currentNumber += progressionStep;
  }

  const hiddenIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return {
    question,
    correctAnswer
  }

}

const runProgressionGame = () => {
  runGame(taskDescription, gameMath);
};

export default runProgressionGame;