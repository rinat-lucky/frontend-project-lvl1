import readlineSync from 'readline-sync';

export const input = (msg) => readlineSync.question(msg);
export const output = (msg) => console.log(msg);

export const start = () => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);
};
