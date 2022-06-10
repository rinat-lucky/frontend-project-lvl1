#!/usr/bin/env node

import { game, getRandomExp, checkAnswer } from '../src/games/calc.js';

game(
  'What is the result of the expression?',
  getRandomExp,
  checkAnswer,
);
