import runGame from '../index.js';

const taskDescription = 'What is the result of the expression?'
const gameMath = () => {
  const isEven = (number) => number % 2 === 0;
  const randomInt = Math.floor(Math.random()*100);
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  const question = `${randomInt}`

  return {
    question,
    correctAnswer
  }

}

const runEvenGame = () => {
  runGame(taskDescription, gameMath);
};

export default runEvenGame;