import { CardView } from './cardView'
import { ClickableView } from './shared/clickableView'
import {
  createElement,
  getClosestElement,
  setStyleProperties,
} from './shared/domHelpers'

class TableView extends ClickableView<(card: CardView) => void> {
  //cards: CardView[] = []

  constructor(parentEl: HTMLElement) {
    super(
      createElement({ parentEl: parentEl, attributes: ['class=game__table'] })
    )
  }

  protected onClicked(event: MouseEvent) {
    const cardEl = getClosestElement(event, `.${CardView.cardElClass}`)
    if (!cardEl) return

    //const cardIndex = +cardEl.dataset.index!

    this.clickHandler?.(new CardView(cardEl))
    //this.clickHandler?.(this.cards[cardIndex])
  }

  addCards(rows: number, columns: number, cards: string[]) {
    setStyleProperties(this.element, `--rows: ${rows}`, `--columns: ${columns}`)

    cards.forEach((card, i) => {
      CardView.getNewCardElement(this.element, card)
      //this.cards.push(new CardView(this.element, card, i))
    })
  }
}

const parent: HTMLElement = document.querySelector('.game') ?? document.body
export default new TableView(parent)
