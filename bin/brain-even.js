#!/usr/bin/env node

import { game, checkAnswer } from '../src/games/even.js';
import { getRandomInt } from '../src/index.js';

game(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getRandomInt,
  checkAnswer,
);
