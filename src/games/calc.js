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
      switch (operator) {
        case '+':
          return (Number(num1) + Number(num2)).toString();
        case '-':
          return (Number(num1) - Number(num2)).toString();
        case '*':
          return (Number(num1) * Number(num2)).toString();
        default:
          return console.log('Произошла ошибка в вычислениях');
      }
    };
    const answer = checkAnswer(question);
    return [question, answer];
  },
};

export default game;
