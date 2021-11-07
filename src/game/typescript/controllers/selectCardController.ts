import {
  CARDS_PER_MOVE,
  FLIP_CARD_ANIMATION_DURATION,
} from '../models/gameConfig'
import { elementsAreTheSame as allAreTheSame } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import { wait } from '../models/helpers'
import { CardView } from '../views/cardView'
import movesPlayedView from '../views/movesPlayedView'
import tableView from '../views/tableView'
import timeView from '../views/timeView'

function getCurrentAttempt() {
  return gameState.currentMoveCards.map(cardView => cardView.cardName)
}

function removeCardsFromGame(cards: CardView[]) {
  cards.forEach(cardView => cardView.hideCard())
}

async function flipBackCards(cards: CardView[]) {
  await wait(FLIP_CARD_ANIMATION_DURATION) // Whit for second card to turn

  gameState.currentMoveCards.forEach(cardView => {
    cardView.flip(FLIP_CARD_ANIMATION_DURATION)
    cardView.clickable = true
  })
}

async function submit() {
  movesPlayedView.counter++
  tableView.clickable = false

  const cardsPlayed = getCurrentAttempt()

  if (allAreTheSame(cardsPlayed)) {
    removeCardsFromGame(gameState.currentMoveCards)
    gameState.cardsLeftInTheGame -= cardsPlayed.length
  } else {
    await flipBackCards(gameState.currentMoveCards)
  }

  tableView.clickable = true

  gameState.currentMoveCards = []
  gameState.movesPlayed++

  if (gameState.cardsLeftInTheGame !== 0) return

  gameState.gameOver = true

  await wait(1000)
  alert('You Win!')
}

export function selectCardController(card: CardView) {
  if (gameState.movesPlayed === 0 && gameState.currentMoveCards.length === 0)
    timeView.startCounting()

  card.flip(FLIP_CARD_ANIMATION_DURATION)
  card.clickable = false

  gameState.currentMoveCards.push(card)

  if (gameState.currentMoveCards.length === CARDS_PER_MOVE) submit()
}
