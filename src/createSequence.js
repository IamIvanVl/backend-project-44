export default (start, step, length) => {
  const sequence = []
  for (let i = 0; i < length; i += 1) {
    const current = start + step * i
    sequence.push(current)
  }
  return sequence
}
