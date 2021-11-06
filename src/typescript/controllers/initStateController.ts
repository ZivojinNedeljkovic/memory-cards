import { CARDS } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import { gameState } from '../models/gameState'

export function initStateController(numOfCards: number) {
  gameState.movesPlayed = 0
  gameState.currentMoveCards = []
  gameState.gameOver = false
  gameState.cards = generateCards(numOfCards, CARDS) as string[]
  gameState.cardsLeftInTheGame = numOfCards
}
