import readlineSync from 'readline-sync';

const runGame = (taskDescription, gameMath) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log (taskDescription)

  let userCorrectAnswerCounter = 0;
  
  while (userCorrectAnswerCounter < 3) {

    const gameParameters = gameMath ()
    
    console.log(`Question: ${gameParameters.question}`);
    
    const answer = readlineSync.question('Your answer: ');
    
    if (answer !== String(gameParameters.correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameParameters.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    userCorrectAnswerCounter += 1;
  }
  console.log(`Congratulations, ${name}!`);



};

export default runGame;