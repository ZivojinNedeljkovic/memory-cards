export function createElement(data: {
  parentEl?: HTMLElement
  tag?: string
  attributes?: string[]
  innerHTML?: string
}) {
  const element = document.createElement(data.tag ?? 'div')

  data.attributes?.forEach(attribute => {
    const [attrName, attrValue] = attribute
      .replace(/'/g, '')
      .replace(/"/g, '')
      .split('=')

    element.setAttribute(attrName, attrValue)
  })

  element.innerHTML = data.innerHTML ?? ''

  data.parentEl?.appendChild(element)

  return element
}

// function removeFirstAndLastChar(str: string) {
//   return str.trim().slice(1, -1)
// }

export function setStyleProperties(
  properties: string[],
  element?: HTMLElement
) {
  element ??= document.querySelector(':root') as HTMLElement

  properties.forEach(property => {
    const [propName, propValue] = property
      .split(':')
      .map(propPart => propPart.trim())

    element!.style.setProperty(propName, propValue)
  })
}

export function getClosestElement(
  event: MouseEvent,
  selectors: string
): HTMLElement | null {
  return (event.target as HTMLElement).closest(selectors)
}
