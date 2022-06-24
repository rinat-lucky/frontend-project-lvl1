import getRandomInt from '../helpers.js';

// const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// const question = () => getRandomInt(1, 30);

// const checkAnswer = (number) => {
//   if (number % 2 === 0) {
//     return 'yes';
//   }
//   return 'no';
// };

// export { rules, question, checkAnswer };

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const genQuestion = () => getRandomInt();
  const question = genQuestion();
  const checkAnswer = () => {
    if (question % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const answer = checkAnswer();

  return [rules, question, answer];
};
