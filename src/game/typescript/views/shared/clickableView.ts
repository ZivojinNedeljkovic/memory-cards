import { View } from './view'

export abstract class ClickableView<Handler extends Function> extends View {
  clickHandler: Handler | undefined

  set clickable(clickable: boolean) {
    this.element.style.pointerEvents = clickable ? 'auto' : 'none'
  }

  constructor(element: HTMLElement) {
    super(element)

    this.element.addEventListener('click', event => {
      this.onClicked(event)
    })
  }

  protected abstract onClicked(event: MouseEvent): void
}
