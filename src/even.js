import readlineSync from 'readline-sync';


const isEven = (number) => number % 2 === 0;

const runGame = () => {
  console.log('Welcome to the Brain Games!')

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log ('Answer "yes" if the number is even, otherwise answer "no".')

  let userCorrectAnswerCounter = 0;
  
  while (userCorrectAnswerCounter < 3) {

    const randomInt = Math.floor(Math.random()*100);
    const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    userCorrectAnswerCounter += 1;
  }
  console.log(`Congratulations, ${name}!`);



};

export default runGame;