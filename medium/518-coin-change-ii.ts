function change(amount: number, coins: number[]): number {
  if (amount === 0) return 1
  let count = 0
  const backtrack = (curAmount: number, index: number) => {
    if (amount === curAmount) {
      count++
      return
    }
    if (amount < curAmount) return
    for (let i = index; i < coins.length; i++) {
      backtrack(curAmount + coins[i], i)
    }
  }
  for (let i = 0; i < coins.length; i++) {
    backtrack(coins[i], i)
  }
  return count
};


console.log(change(5, [1,2,5]) === 4)
console.log(change(3, [2]) === 0)
console.log(change(10, [10]) === 1)