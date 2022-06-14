#!/usr/bin/env node

import { startGame, getRandomNums, checkAnswer } from '../src/games/gcd.js';

startGame(
  'Find the greatest common divisor of given numbers.',
  getRandomNums,
  checkAnswer,
);
