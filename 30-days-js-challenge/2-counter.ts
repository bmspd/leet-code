function createCounter(n: number): () => number {
  let number = n
  return () => number++
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())