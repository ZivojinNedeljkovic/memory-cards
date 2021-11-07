/** Throws error if min is greater then max */
function getRandomIntInclusive(min: number, max: number) {
  if (min > max) throw new Error('Invalid interval')

  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

/** Returns undefined if array is empty */
const getRandomElementFromArray = <T>(array: readonly T[]) => {
  if (array.length === 0) return undefined

  return array[getRandomIntInclusive(0, array.length - 1)]
}

function randomlyFillArray<T>(length: number, elements: readonly T[]) {
  const array: (T | undefined)[] = []
  while (length-- > 0) {
    array.push(getRandomElementFromArray(elements))
  }
  return array
}

/** Duplicate elements are shallow copies */
function duplicateArrayElements<T>(array: readonly T[], times: number) {
  const duplicateArray: T[] = []
  while (times-- > 0) {
    duplicateArray.push(...array)
  }
  return duplicateArray
}

function stirArray<T>(array: T[]) {
  array = [...array]
  for (let i = 0; i < array.length; i++) {
    const newIndex = getRandomIntInclusive(0, array.length - 1)
    const currIndexEl = array[i]

    array[i] = array[newIndex]
    array[newIndex] = currIndexEl
  }
  return array
}

export function generateCards(
  numOfCards: number,
  cardNames: readonly string[],
  cardsPerMove: number
) {
  return stirArray(
    duplicateArrayElements(
      randomlyFillArray(numOfCards / cardsPerMove, cardNames),
      cardsPerMove
    )
  )
}

/** Works with value types */
export function elementsAreTheSame<T>(array: T[]) {
  if (array.length < 2) return true

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) return false
  }

  return true
}
