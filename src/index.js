import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);

function getRandomInt(min = 1, max = 1000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  do {
    const random = getRandomInt();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');

    if (((random % 2) === 0 && answer === 'yes') || ((random % 2) === 1 && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else if ((random % 2 === 0) && (answer !== 'yes')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    } else if (random % 2 === 1 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    }
  } while (counter !== 3);

  return console.log(`Congratulations, ${username}!`);
};
