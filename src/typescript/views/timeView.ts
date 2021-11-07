import { CounterView } from './shared/counterView'
import { View } from './shared/view'

class TimeView extends CounterView {
  interval?: NodeJS.Timer

  startCounting() {
    this.counter = 0

    this.interval = setInterval(() => {
      this.counter++
    }, 1000)
  }
}

export default new TimeView(
  document.querySelector('.game__scoreboard__time') as HTMLElement
)
