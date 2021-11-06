import { CARDS } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import { gameState } from '../models/gameState'

export function initStateController(numOfCards: number) {
  gameState.attemptsMade = 0
  gameState.currentAttemptCards = []
  gameState.gameOver = false
  gameState.cards = generateCards(numOfCards, CARDS) as string[]
}
