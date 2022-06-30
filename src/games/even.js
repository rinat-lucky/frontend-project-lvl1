import getRandomInt from '../helpers.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestion = () => getRandomInt();
  const number = getQuestion();

  const checkAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const answer = checkAnswer(number);

  return [rules, number, answer];
};
