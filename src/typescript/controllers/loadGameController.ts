import { CARDS } from '../models/gameConfig'
import { generateCards } from '../models/gameLogic'
import tableView from '../views/tableView'
import { initStateController } from './initStateController'
import { selectCardController } from './selectCardController'

export function loadGameController() {
  initStateController(10)
  const cards = generateCards(40, CARDS) as string[]
  tableView.addCards(5, 8, cards)

  tableView.clickHandler = selectCardController
}
