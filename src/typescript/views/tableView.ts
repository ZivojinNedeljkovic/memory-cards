import { CardView } from './cardView'
import { ClickableView } from './shared/clickableView'
import { getClosestElement, setStyleProperties } from './shared/domHelpers'

class TableView extends ClickableView<(card: CardView) => void> {
  protected onClicked(event: MouseEvent) {
    const cardEl = getClosestElement(event, `.${CardView.cardElClass}`)
    if (!cardEl) return

    this.clickHandler?.(new CardView(cardEl))
  }

  addCards(rows: number, columns: number, cards: string[]) {
    setStyleProperties([`--rows: ${rows}`, `--columns: ${columns}`])

    cards.forEach((card, i) => {
      CardView.getNewCardElement(this.element, card)
    })
  }
}

export default new TableView(
  document.querySelector('.game__table') as HTMLElement
)
