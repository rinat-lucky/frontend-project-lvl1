export default (generateRound, input, output) => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);

  if (!generateRound) {
    return;
  }

  const [rules] = generateRound();
  output(rules);

  for (let i = 0; i !== 3; i += 1) {
    const [, currentQuestion, correctAnswer] = generateRound();

    output(`Question: ${currentQuestion}`);

    const userAnswer = input('Your answer: ');

    if (userAnswer !== correctAnswer) {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      output(`Let's try again, ${userName}!`);
      return;
    }
    output('Correct!');
  }
  output(`Congratulations, ${userName}!`);
};
