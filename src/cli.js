import readlineSync from 'readline-sync';
import playGame from './index.js';

export default (game) => {
  const input = (msg) => readlineSync.question(msg);
  const output = (msg) => console.log(msg);
  playGame(game, input, output);
};
