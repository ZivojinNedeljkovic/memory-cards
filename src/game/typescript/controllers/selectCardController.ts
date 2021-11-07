import { FLIP_CARD_ANIMATION_DURATION, gameConfig } from '../models/gameConfig'
import { elementsAreTheSame as allAreTheSame } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import { wait as pause } from '../models/helpers'
import { CardView } from '../views/cardView'
import movesPlayedView from '../views/movesPlayedView'
import tableView from '../views/tableView'
import timeView from '../views/timeView'

const getCurrentMoveCards = () =>
  gameState.currentMoveCardViews.map(cardView => cardView.cardName)

function removeCardsFromTheGame(cards: CardView[]) {
  cards.forEach(cardView => cardView.hideCard())
}

async function flipBackCards(cards: CardView[]) {
  await pause(FLIP_CARD_ANIMATION_DURATION) // Whit for second card to turn

  gameState.currentMoveCardViews.forEach(cardView => {
    cardView.flip(FLIP_CARD_ANIMATION_DURATION)
    cardView.clickable = true
  })
}

async function submit() {
  movesPlayedView.counter++
  tableView.clickable = false

  const currentMoveCards = getCurrentMoveCards()

  if (allAreTheSame(currentMoveCards)) {
    removeCardsFromTheGame(gameState.currentMoveCardViews)

    gameState.cardsLeftInTheGame -= currentMoveCards.length
  } else {
    await flipBackCards(gameState.currentMoveCardViews)
  }

  tableView.clickable = true

  gameState.currentMoveCardViews = []
  gameState.movesPlayed++

  if (gameState.cardsLeftInTheGame !== 0) return

  gameState.gameOver = true

  await pause(1000)
  alert('You Win!')
}

const isFirstClick = () =>
  gameState.movesPlayed === 0 && gameState.currentMoveCardViews.length === 0

const moveIsComplete = () =>
  gameState.currentMoveCardViews.length === gameConfig.cardsPerMove

export function selectCardController(card: CardView) {
  if (isFirstClick()) timeView.startCounting()

  card.flip(FLIP_CARD_ANIMATION_DURATION)
  card.clickable = false

  gameState.currentMoveCardViews.push(card)

  if (moveIsComplete()) submit()
}
