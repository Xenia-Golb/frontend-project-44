#!/usr/bin/env node

import startGame from '../src/index.js'
import getQuestionAndAnswer from '../src/games/prime.js'

const gameRules
  = 'Answer "yes" if given number is prime. Otherwise answer "no".'

startGame(gameRules, getQuestionAndAnswer)
