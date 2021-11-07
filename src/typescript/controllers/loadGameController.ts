import { CARDS } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import { setStyleProperties } from '../views/shared/domHelpers'
import tableView from '../views/tableView'
import timeView from '../views/timeView'
import { initStateController } from './initStateController'
import { selectCardController } from './selectCardController'

export function loadGameController() {
  const rows = 5
  const columns = 8

  initStateController(rows * columns)
  const cards = generateCards(rows * columns, CARDS) as string[]
  tableView.addCards(rows, columns, cards)

  tableView.clickHandler = selectCardController
  timeView.startCounting()
}
