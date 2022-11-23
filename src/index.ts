/**
 * This program star hourglass
 *
 * By       Lily Liu
 * Version  1.0
 * Since    2022-11-21
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of Hourglass
 *
 * @param {number} intNumber number of star
 * @param {number} spacesNumber number of spaces
 */
function stars (intNumber: number, spacesNumber: number = 0): void {
  let output: string = ''

  for (let counter: number = 0; counter < spacesNumber; counter++) {
    output += ' '
  }

  for (let counter1: number = 0; counter1 < intNumber; counter1++) {
    output += '* '
  }

  console.log(output)

  if (intNumber > 1) {
    stars(intNumber - 1, spacesNumber + 1)
  }
  console.log(output)
}

const input = prompt('Enter height of hourglass : ')
try {
  const inputNumber = parseInt(input)

  if (isNaN(inputNumber)) {
    console.log('Invalid Input')
  } else if (inputNumber <= 0) {
    console.log('Invalid Input')
  } else stars(inputNumber)
} catch (e) {
  console.log('Invalid Input')
}

console.log('\nDone.')
