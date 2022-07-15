const createProgression = (firstNum, progressLength, stepOfProgress, missedNumIndex) => {
  const progression = [firstNum];
  for (let i = 1; i < progressLength; i += 1) {
    const nextNum = firstNum + (stepOfProgress * i);
    progression.push(nextNum);
  }
  const missedNum = progression[missedNumIndex];
  progression[missedNumIndex] = '..';
  return [progression, missedNum];
};

const game = {
  description: 'What number is missing in the progression?',
  generateRound: (getRandomInt) => {
    const getQuestion = () => {
      const PROGRESSION_LENGTH = 10;
      const step = getRandomInt(1, 5);
      const firstElement = getRandomInt(1, 15);
      const missedNumIndex = getRandomInt(0, 10);
      const [progression, missedNumber] = createProgression(
        firstElement,
        PROGRESSION_LENGTH,
        step,
        missedNumIndex,
      );
      return [progression.join(' '), missedNumber];
    };
    const [question, answerNum] = getQuestion();
    const answer = answerNum.toString();

    return [question, answer];
  },
};

export default game;
