function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'
  let res = ''
  let bNum1 = num1.length >= num2.length ? num1 : num2
  let lNum2 = bNum1 === num1 ? num2 : num1
  let sumNums = []
  // count all numbers two sum up then
  for (let i = lNum2.length - 1; i >= 0; i--) {
    let zeroCount = lNum2.length - i - 1
    let numForSum = ''
    let remainder = 0
    for (let j = bNum1.length - 1; j >= 0; j--) {
      let digit1 = bNum1[j].charCodeAt(0) - 48
      let digit2 = lNum2[i].charCodeAt(0) - 48
      let numFromDig = digit1 * digit2
      numForSum = `${(numFromDig % 10 + remainder) % 10}${numForSum}`
      remainder = Math.trunc(numFromDig / 10 + Math.trunc((numFromDig % 10 + remainder) / 10))
    }
    numForSum = `${remainder > 0 ? remainder : ''}${numForSum}` + Array(zeroCount).fill('0').join('')
    sumNums.push(numForSum)
  }
  sumNums = sumNums.map((sumNum, index) => {
    const diff = sumNums[sumNums.length - 1].length - sumNum.length
    if (diff > 0)
      return Array(diff).fill('0').join('') + sumNum
    else return sumNum
  })
  // count sum of all result numbers w/o built-in conversion
  let remainder = 0
  for (let i = sumNums[0].length - 1; i >= 0; i--) {
    let number = 0
    for (let j = 0; j < sumNums.length; j++) {
      number += sumNums[j][i].charCodeAt(0) - 48
    }
    res = `${(number + remainder) % 10}${res}`
    remainder = Math.trunc((number + remainder) / 10)
  }
  if (remainder) res = `${remainder}${res}`
  return res
}

console.log(multiply("2", "3") === '6')
console.log(multiply("123", "456") === "56088")
console.log(multiply("123456789", "987654321") === "121932631112635269")
console.log(multiply("140", "721") === "100940")