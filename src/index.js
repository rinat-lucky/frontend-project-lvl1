import readlineSync from 'readline-sync';

export const getRandomInt = (min = 1, max = 30) => Math.floor(Math.random() * (max - min)) + min;

console.log('Welcome to the Brain Games!');
export const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);

export const game = (rulesOfGame, funcRandom, funcCheck, text = '') => {
  let counter = 0;
  console.log(rulesOfGame);
  do {
    const random = funcRandom();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = funcCheck(random);

    if (answer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    } else if (text) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(text);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  } while (counter !== 3);

  return console.log(`Congratulations, ${username}!`);
};
