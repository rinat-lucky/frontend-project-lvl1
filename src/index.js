export const getRandomInt = (min = 1, max = 30) => Math.floor(Math.random() * (max - min)) + min;

export const startGame = (gameRules, gameQuestion, gameAnswer, inText, outText) => {
  outText('Welcome to the Brain Games!');
  const username = inText('May I have your name? ');
  outText(`Hello, ${username}!`);

  if (!(gameRules && gameQuestion && gameAnswer)) {
    return;
  }

  outText(gameRules);
  let counter = 0;
  do {
    const question = gameQuestion();
    const answer = gameAnswer(question);

    outText(`Question: ${question}`);

    const userAnswer = inText('Your answer: ');

    if (userAnswer === answer) {
      outText('Correct!');
      counter += 1;
    } else {
      outText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      outText(`Let's try again, ${username}!`);
      return;
    }
  } while (counter !== 3);

  outText(`Congratulations, ${username}!`);
};
