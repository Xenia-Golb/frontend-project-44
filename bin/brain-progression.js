#!/usr/bin/env node

import startGame from '../src/index.js'
import getQuestionAndAnswer from '../src/games/progression.js'

const gameRules = 'What number is missing in the progression?'

startGame(gameRules, getQuestionAndAnswer)
