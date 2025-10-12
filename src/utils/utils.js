export const generateNumber = (min = 0, max = 100) => {
  const range = max - min + 1
  if (range <= 0 || range > 2 ** 32) {
    throw new Error('Invalid range')
  }

  const randomUint32 = crypto.getRandomValues(new Uint32Array(1))[0]
  return min + (randomUint32 % range)
}
