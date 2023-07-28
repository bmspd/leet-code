async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise(async (resolve, reject) => {
    const promises = [];
    const resolves = [];
    functions.forEach((func) => promises.push(func().catch((e) => reject(e))));
    for (const res of promises) {
      const awaited = await res;
      resolves.push(awaited);
    }
    resolve(resolves);
  });
}

const functions1 = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

const functions2 = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
];

console.log(await promiseAll(functions1));
console.log(await promiseAll(functions2));
export {};
