import lodash from 'lodash'
const {isEqual} = lodash

const ifNumbersHaveDelim = (i: number, j: number, border: number) => {
  for (let z = 2; z <= border; z++) {
    if (i % z === 0 && j % z === 0) return true
  }
  return false
}

function simplifiedFractions(n: number): string[] {
  const res = []
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i === j) continue
      if (ifNumbersHaveDelim(i, j, i)) continue
      res.push(`${j}/${i}`)
    }
  }
  return res
};

console.log(isEqual(simplifiedFractions(2), ["1/2"]))
console.log(simplifiedFractions(9))