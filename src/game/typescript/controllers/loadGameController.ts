import { ALL_CARDS, gameConfig } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import refreshIconView from '../views/refreshIconView'
import tableView from '../views/tableView'
import { selectCardController } from './selectCardController'
import { startOverController } from './startOverController'

function getLocalStorageParams() {
  return {
    rows: +(localStorage.getItem('rows') ?? 5),
    columns: +(localStorage.getItem('columns') ?? 8),
    cardsInTheGame: +(localStorage.getItem('cardsInTheGame') ?? 6),
    cardsPerMove: +(localStorage.getItem('cardsPerMove') ?? 2),
  }
}

function setUpGameConfig() {
  const { rows, columns, cardsInTheGame, cardsPerMove } =
    getLocalStorageParams()

  gameConfig.rows = rows
  gameConfig.columns = columns
  gameConfig.cardsPerMove = cardsPerMove
  gameConfig.inGameCards = ALL_CARDS.filter((_, i) => i < cardsInTheGame)
}

function setUpGameState() {
  const numberOfCards = gameConfig.rows * gameConfig.columns
  gameState.movesPlayed = 0
  gameState.currentMoveCardViews = []
  gameState.gameOver = false
  gameState.cards = generateCards(
    numberOfCards,
    gameConfig.inGameCards,
    gameConfig.cardsPerMove
  ) as string[]
  gameState.cardsLeftInTheGame = numberOfCards
}

export function loadGameController() {
  setUpGameConfig()
  setUpGameState()

  tableView.addCards(gameConfig.rows, gameConfig.columns, gameState.cards)

  tableView.clickHandler = selectCardController
  refreshIconView.clickHandler = startOverController
}
