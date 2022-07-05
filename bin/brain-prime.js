#!/usr/bin/env node

import playGame from '../src/index.js';
import { input, output } from '../src/cli.js';
import game from '../src/games/prime.js';

playGame(game, input, output);
