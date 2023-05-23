type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const evalNext = async () => {
    if (functions.length === 0) return
    const fn = functions.shift()
    await fn()
    await evalNext()
  }
  return Promise.all(Array(n).fill(0).map(evalNext))
}

const functions1 = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]

const res1 = await promisePool(functions1, 2)
export {}