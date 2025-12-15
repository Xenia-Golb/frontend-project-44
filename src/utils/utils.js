import { webcrypto } from 'node:crypto'

export const generateNumber = (min = 0, max = 100) => {
  const range = max - min + 1
  if (range <= 0 || range > 2 ** 32) {
    throw new Error('Invalid range')
  }
  const array = new Uint32Array(1)
  webcrypto.getRandomValues(array)
  return min + (array[0] % range)
}
