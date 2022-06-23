export default (rules, question, answer, input, output) => {
  output('Welcome to the Brain Games!');
  const username = input('May I have your name? ');
  output(`Hello, ${username}!`);

  if (!(rules && question && answer)) {
    return;
  }

  output(rules);
  let counter = 0;
  do {
    const currentQuestion = question();
    const correctAnswer = answer(currentQuestion);

    output(`Question: ${currentQuestion}`);

    const userAnswer = input('Your answer: ');

    if (userAnswer === correctAnswer) {
      output('Correct!');
      counter += 1;
    } else {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      output(`Let's try again, ${username}!`);
      return;
    }
  } while (counter !== 3);

  output(`Congratulations, ${username}!`);
};
