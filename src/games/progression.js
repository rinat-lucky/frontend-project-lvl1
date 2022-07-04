const game = {
  description: 'What number is missing in the progression?',
  generateRound: (getRandomInt) => {
    let missedNum;

    const getQuestion = () => {
      const PROGRESSION_LENGTH = 10;
      const stepOfProgression = getRandomInt(1, 5);
      const firstNum = getRandomInt(1, 15);
      const numberSeries = [firstNum];

      for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
        const nextNum = firstNum + (stepOfProgression * i);
        numberSeries.push(nextNum);
      }

      const missedNumIndex = getRandomInt(0, 10);
      missedNum = numberSeries[missedNumIndex];
      numberSeries[missedNumIndex] = '..';
      return numberSeries.join(' ');
    };
    const question = getQuestion();
    const answer = missedNum.toString();

    return [question, answer];
  },
};

export default game;
