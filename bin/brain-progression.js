#!/usr/bin/env node

import { game, getRandomProgression, checkAnswer } from '../src/games/progression.js';
import { username } from '../src/index.js';

game(
  'What number is missing in the progression?',
  getRandomProgression,
  checkAnswer,
  `Let's try again, ${username}!`,
);
