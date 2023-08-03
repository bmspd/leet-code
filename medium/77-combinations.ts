import lodash from "lodash";
const { isEqual } = lodash

function combine(n: number, k: number): number[][] {
  const res = []
  const backtrack = (remain: number, comb: number[], next: number) => {
    if (remain === 0) res.push([...comb])
    else {
      for (let i = next; i < n + 1; i++) {
        // в цикле добавляем каждое число на +1 больше, 
        // далее вызываем backtrack и так, пока не составится комбинация нужной длины
        comb.push(i)
        backtrack(remain - 1, comb, i + 1)
        comb.pop()
      }
    }
  }
  backtrack(k, [], 1)
  return res
};

console.log(isEqual(combine(4, 2), [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]) === true)
console.log(isEqual(combine(1, 1), [[1]]) === true)