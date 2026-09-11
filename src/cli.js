import readlineSync from 'readline-sync';

const greetings = () => {
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
};

export default greetings;
