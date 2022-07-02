import getRandomInt from './helpers.js';

const ROUNDS_COUNT = 3;

export default (game, input, output) => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);

  output(game.description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = game.generateRound(getRandomInt);

    output(`Question: ${question}`);

    const userAnswer = input('Your answer: ');

    if (userAnswer !== answer) {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      output(`Let's try again, ${userName}!`);
      return;
    }
    output('Correct!');
  }
  output(`Congratulations, ${userName}!`);
};
