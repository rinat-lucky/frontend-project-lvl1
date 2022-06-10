#!/usr/bin/env node

import { game, getRandomNums, checkAnswer } from '../src/games/gcd.js';

game(
  'Find the greatest common divisor of given numbers.',
  getRandomNums,
  checkAnswer,
);
