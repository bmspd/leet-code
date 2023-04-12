function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0
  let profit = 0;
  let min = prices[0]
  let max = prices[1]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i]
    }
    else if (prices[i] < min) {
      min = prices[i]
      max = prices[i]
    }
    if (max - min > profit) profit = max - min
  }
  return profit
}


console.log(maxProfit([7,1,5,3,6,4]), '---> 5')
console.log(maxProfit([7,6,4,3,1]), '---> 0')