import { View } from './shared/view'

class TableView extends View {}

export default new TableView(
  document.querySelector('.game__timer') as HTMLElement
)
let needed
