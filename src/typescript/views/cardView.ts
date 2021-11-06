import { View } from './shared/view'
import { createElement } from './shared/domHelpers'

export class CardView extends View {
  static readonly cardElClass = 'game__table__card'

  static getNewCardElement(parentEl: HTMLElement, cardName: string) {
    return createElement({
      parentEl: parentEl,
      attributes: [
        `class=${CardView.cardElClass}`,
        `data-card-name=${cardName}`,
      ],
      innerHTML: `
        <div class="${CardView.cardElClass}__inner">
          <div class="${CardView.cardElClass}__front">
           <p>MC</p>
          </div>
          <div class="${CardView.cardElClass}__back--${cardName}">
           <p>${cardName}</p>
          </div>
        </div>
        `,
    })
  }

  get cardName() {
    return this.element.dataset.cardName!
  }

  set clickable(clickable: boolean) {
    this.element.style.pointerEvents = clickable ? 'auto' : 'none'
  }

  private flipped = false

  private rotateY(deg: number, duration: number) {
    const innerEl = this.element.querySelector(
      `.${CardView.cardElClass}__inner`
    ) as HTMLElement

    innerEl.style.transition = `transform ${duration}ms`
    innerEl.style.transform = `rotateY(${deg}deg)`
  }

  flip(duration: number) {
    this.flipped ? this.rotateY(0, duration) : this.rotateY(180, duration)
    this.flipped = !this.flipped
  }

  hideCard() {
    this.element.classList.add('fadeOut')
  }
}
