type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function(...args) {
    return new Promise(async (resolve, reject) => {
      const tId = setTimeout(() => {
        reject("Time Limit Exceeded")
      }, t)
      try {
        resolve(await fn(...args))
      } catch (e) {
        reject(e)
      }
      clearTimeout(tId)
    })
  }
}

const fn1 = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}

const t1 = timeLimit(fn1, 150)
const res = await t1(50)
console.log(res)
export {}