import getRandomInt from '../helpers.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  let missedNum;

  const genQuestion = () => {
    const stepOfProgression = getRandomInt(1, 5);
    const firstNum = getRandomInt(1, 15);
    const arr = [firstNum];

    for (let i = 1; i < 10; i += 1) {
      const nextNum = firstNum + (stepOfProgression * i);
      arr.push(nextNum);
    }

    const missedNumIndex = getRandomInt(0, 10);
    missedNum = arr[missedNumIndex];
    arr[missedNumIndex] = '..';
    return arr.join(' ');
  };
  const question = genQuestion();

  const checkAnswer = () => missedNum.toString();
  const answer = checkAnswer();

  return [rules, question, answer];
};
