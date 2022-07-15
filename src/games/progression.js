const PROGRESSION_LENGTH = 10;

const createProgression = (firstElement, progressionLength, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = firstElement + (step * i);
    progression.push(nextElement);
  }
  return progression;
};

const game = {
  description: 'What number is missing in the progression?',
  generateRound: (getRandomInt) => {
    const step = getRandomInt(1, 5);
    const firstElement = getRandomInt(1, 15);
    const missedNumIndex = getRandomInt(1, 10);
    const progression = createProgression(
      firstElement,
      PROGRESSION_LENGTH,
      step,
    );
    progression.splice(missedNumIndex, 1, '..');
    const question = progression.join(' ');
    const answer = (progression[missedNumIndex - 1] + step).toString();

    return { question, answer };
  },
};

export default game;
