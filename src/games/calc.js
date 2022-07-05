const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator!');
  }
};

const game = {
  description: 'What is the result of the expression?',
  generateRound: (getRandomInt) => {
    const getQuestion = () => {
      const num1 = getRandomInt();
      const num2 = getRandomInt();
      const operators = ['+', '-', '*'];
      const lastOperatorIndex = operators.length - 1;
      const operator = operators[getRandomInt(0, lastOperatorIndex)];
      return `${num1} ${operator} ${num2}`;
    };
    const question = getQuestion();

    const checkAnswer = (text) => {
      const [num1, operator, num2] = text.split(' ');
      return calc(Number(num1), Number(num2), operator).toString();
    };
    const answer = checkAnswer(question);
    return [question, answer];
  },
};

export default game;
