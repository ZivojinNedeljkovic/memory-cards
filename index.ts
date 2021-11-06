import { loadGameController } from './src/typescript/controllers/loadGameController'

loadGameController()

// function addConsecutiveElements(array: number[]) {
//   const sumArray: number[] = []

//   for (let i = 0; i < array.length - 1; i += 2) {
//     const sumOfConsecutiveEl = array[i] + array[i + 1]
//     sumArray.push(sumOfConsecutiveEl)
//   }

//   return sumArray
// }

// function multiplyConsecutiveElements(array: number[]) {
//   const productArray: number[] = []

//   for (let i = 0; i < array.length - 1; i += 2) {
//     const productOfConsecutiveEl = array[i] * array[i + 1]
//     productArray.push(productOfConsecutiveEl)
//   }

//   return productArray
// }

// function main(array: number[]) {
//   let counter = 0
//   while (array.length !== 1) {
//     if (counter % 2) array = multiplyConsecutiveElements(array)
//     else array = addConsecutiveElements(array)
//     counter++
//   }
//   return array
// }

// const dummyData = [-1, 1, 2, 3, 5, 5, 3, 7]
// console.log(main(dummyData))
