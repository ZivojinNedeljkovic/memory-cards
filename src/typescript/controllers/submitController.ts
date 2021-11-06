import { FLIP_CARD_ANIMATION_DURATION } from '../models/gameConfig'
import { elementsAreTheSame, wait } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import tableView from '../views/tableView'

function getCurrentAttempt() {
  return gameState.currentAttemptCards.map(cardView => cardView.cardName)
}

function removeCards() {
  gameState.currentAttemptCards.forEach(cardView => cardView.hideCard())
}

async function flipBackCards() {
  await wait(FLIP_CARD_ANIMATION_DURATION) // Whit for second card to turn

  gameState.currentAttemptCards.forEach(cardView => {
    cardView.flip(FLIP_CARD_ANIMATION_DURATION)
    cardView.clickable = true
  })
}

export async function submitController() {
  tableView.clickable = false

  const attemptCards = getCurrentAttempt()

  if (elementsAreTheSame(attemptCards)) {
    removeCards()
  } else {
    await flipBackCards()
  }

  tableView.clickable = true
  gameState.currentAttemptCards = []
}
