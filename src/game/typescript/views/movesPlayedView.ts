import { CounterView } from './shared/counterView'

class MovesPlayedView extends CounterView {}

export default new MovesPlayedView(
  document.querySelector('.game__scoreboard__moves-payed') as HTMLElement
)
