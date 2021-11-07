import movesPlayedView from '../views/movesPlayedView'
import tableView from '../views/tableView'
import timeView from '../views/timeView'
import { loadGameController } from './loadGameController'

export function startOverController() {
  tableView.clearTable()
  timeView.counter = 0
  movesPlayedView.counter = 0
  loadGameController()
}
