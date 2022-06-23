export default (rules, question, answer, input, output) => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);

  if (!(rules && question && answer)) {
    return;
  }

  output(rules);
  let counter = 0;
  while (counter !== 3) {
    const currentQuestion = question();
    const correctAnswer = answer(currentQuestion);

    output(`Question: ${currentQuestion}`);

    const userAnswer = input('Your answer: ');

    if (userAnswer === correctAnswer) {
      output('Correct!');
      counter += 1;
    } else {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      output(`Let's try again, ${userName}!`);
      return;
    }
  }
  output(`Congratulations, ${userName}!`);
};
