import { CARDS, CARDS_PER_MOVE } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import { setStyleProperties } from '../views/shared/domHelpers'
import tableView from '../views/tableView'
import { initStateController } from './initStateController'
import { selectCardController } from './selectCardController'

function getLocalStorageParams() {
  return {
    rows: +(localStorage.getItem('rows') ?? 5),
    columns: +(localStorage.getItem('columns') ?? 8),
    cardsInTheGame: +(localStorage.getItem('cardsInTheGame') ?? 6),
    cardsPerMove: +(localStorage.getItem('cardsPerMove') ?? 2),
  }
}

export function loadGameController() {
  const { rows, columns, cardsInTheGame, cardsPerMove } =
    getLocalStorageParams()

  //CARDS_PER_MOVE = cardsPerMove
  console.log(rows, columns, cardsInTheGame, cardsPerMove)

  initStateController(rows * columns)
  const cards = generateCards(rows * columns, CARDS) as string[]
  tableView.addCards(rows, columns, cards)

  tableView.clickHandler = selectCardController
}
