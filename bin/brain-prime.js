#!/usr/bin/env node

import start from '../src/cli.js';
import { rules, question, checkAnswer } from '../src/games/prime.js';

start(
  rules,
  question,
  checkAnswer,
);
