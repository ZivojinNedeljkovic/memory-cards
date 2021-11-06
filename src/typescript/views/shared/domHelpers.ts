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

// function separateRootAmdInnerMarkup(
//   markup: string
// ): [rootMarkup: string, innerMarkup: string[]] {
//   const [rootElMarkup, ...innerMarkup] = markup
//     .split('>')
//     .map(markup => markup + '>')
//     .filter((_, i, arr) => i < arr.length - 2)

//   return [rootElMarkup, innerMarkup]
// }

// function removeFirstAndLastChar(str: string) {
//   return str.trim().slice(1, -1)
// }

// export function createElement2(markup: string) {
//   const [rootElMarkup, innerMarkup] = separateRootAmdInnerMarkup(markup)

//   const [rootTag, ...rootAttributes] = removeFirstAndLastChar(
//     rootElMarkup.trim()
//   ).split(' ')

//   console.log(rootTag)
//   console.log(rootAttributes)
// }

// createElement2(`

//  <div class="flip-card-inner kkk" id="dsaddsad">
//    <div class="flip-card-front">
//      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
//    </div>
// </div>`)

export function setStyleProperties(
  element: HTMLElement,
  ...properties: string[]
) {
  properties.forEach(property => {
    const [propName, propValue] = property
      .split(':')
      .map(propPart => propPart.trim())

    element.style.setProperty(propName, propValue)
  })
}

export function getClosestElement(
  event: MouseEvent,
  selectors: string
): HTMLElement | null {
  return (event.target as HTMLElement).closest(selectors)
}
