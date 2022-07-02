const ROUNDS_COUNT = 3;

export default (game, input, output) => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);

  const [description] = game();
  output(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [, currentQuestion, correctAnswer] = game();

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
