export default (rules, question, answer, inText, outText) => {
  outText('Welcome to the Brain Games!');
  const username = inText('May I have your name? ');
  outText(`Hello, ${username}!`);

  if (!(rules && question && answer)) {
    return;
  }

  outText(rules);
  let counter = 0;
  do {
    const currentQuestion = question();
    const correctAnswer = answer(currentQuestion);

    outText(`Question: ${currentQuestion}`);

    const userAnswer = inText('Your answer: ');

    if (userAnswer === correctAnswer) {
      outText('Correct!');
      counter += 1;
    } else {
      outText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      outText(`Let's try again, ${username}!`);
      return;
    }
  } while (counter !== 3);

  outText(`Congratulations, ${username}!`);
};
