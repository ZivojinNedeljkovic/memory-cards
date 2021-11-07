import { ClickableView } from './shared/clickableView'

class RefreshIconView extends ClickableView<() => void> {
  protected onClicked(event: MouseEvent): void {
    this.clickHandler?.()
  }
}

export default new RefreshIconView(
  document.querySelector('.game__refresh-icon') as HTMLElement
)
