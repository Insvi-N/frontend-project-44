import runGame from '../index.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const gameMath = () => {
  const randomInt = Math.floor(Math.random()*101);
  const isPrime = (intToCheck) => {
    if (intToCheck < 2) {
      return false;
    }

    for (let divisor = 2; divisor < intToCheck; divisor += 1) {
      if (intToCheck % divisor === 0) {
        return false;
      }
    }

    return true;
  };
  const question = `${randomInt}`
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';
  return {
    question,
    correctAnswer
  }

}

const runPrimeGame = () => {
  runGame(taskDescription, gameMath);
};

export default runPrimeGame;