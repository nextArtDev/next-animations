export function createPositions(numInputs: number): string[] {
  const centerIndex = Math.floor(numInputs / 2)
  const positions = []

  for (let i = 1; i <= centerIndex; i++) {
    positions.push(`left${centerIndex - i + 1}`)
  }

  positions.push('center')

  for (let i = 1; i <= centerIndex; i++) {
    positions.push(`right${i}`)
  }

  // If the number of inputs is odd, repeat the last position
  if (numInputs % 2 === 0) {
    positions.push(`right${centerIndex + 1}`)
  }

  return positions
}

export function createVariants(numInputs: number) {
  const centerIndex = Math.floor(numInputs / 2)
  let imageVariant = {}

  for (let i = 1; i <= centerIndex; i++) {
    // positions.push(`left${i}`)
    imageVariant = {
      ...imageVariant,
      [`left${i}`]: {
        x: `-${i * 5}rem`,
        scale: (i / 2) * 0.7,
        zIndex: Math.floor(i / 2) + 1,
      },
    }
  }

  //   positions.push('center')
  imageVariant = {
    ...imageVariant,
    center: { x: '0%', scale: 1, zIndex: Math.floor(numInputs / 2) + 1 },
  }

  for (let i = 1; i <= centerIndex; i++) {
    imageVariant = {
      ...imageVariant,
      [`right${i}`]: {
        x: `${i * 5}rem`,
        scale: (i / 2) * 0.7,
        zIndex: Math.floor(i / 2) + 1,
      },
    }
    // positions.push(`right${i}`)
  }
  // If the number of inputs is odd, repeat the last position
  //   if (numInputs % 2 === 0) {
  //     // positions.push(`right${centerIndex + 1}`)
  //   }

  return { ...imageVariant }
}
