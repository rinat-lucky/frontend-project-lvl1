#!/usr/bin/env node

import { startGame, checkAnswer } from '../src/games/even.js';
import { getRandomInt } from '../src/index.js';

startGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getRandomInt,
  checkAnswer,
);
