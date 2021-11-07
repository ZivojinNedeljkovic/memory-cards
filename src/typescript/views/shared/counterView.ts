import { View } from './view'

export abstract class CounterView extends View {
  private _counter = 0

  set counter(val: number) {
    this.element.innerHTML = `${val}`
    this._counter = val
  }

  get counter() {
    return this._counter
  }
}
