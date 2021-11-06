import { createElement } from './shared/domHelpers'
import { View } from './shared/view'

class GameView extends View {
  constructor(parentEl: HTMLElement) {
    super(createElement({ parentEl: parentEl }))
  }
}

export default new GameView(document.body)
