function longestPalindrome(words: string[]): number {
  const dict = {}
  // count all pairs from array
  for (const word of words) {
    if (dict[word]) dict[word] += 1
    else dict[word] = 1
  }
  // rewrite dictionary counting only mirror pairs
  for (const pair in dict) {
    const reversed = `${pair[1]}${pair[0]}`
    if (pair[0] === pair[1]) continue
    if (dict[pair] && dict[reversed]) {
      const less = dict[pair] < dict[reversed] ? dict[pair] : dict[reversed]
      dict[pair] = less * 2
      delete dict[reversed]
    }
    else {
      delete dict[pair]
      delete dict[reversed]
    }
  }
  let counter = 0
  let countedSame = false
  for (const pair in dict) {
    counter += Math.trunc(dict[pair] % 2 === 0 ? dict[pair] : dict[pair] - 1) * 2
    if (pair[0] === pair[1] && !countedSame) {
      if (dict[pair] % 2 !== 0) {
        counter += 2
        countedSame = true
      }
    }
  }
  return counter
}

console.log(longestPalindrome(["lc","cl","gg"]), '---> 6')

console.log(longestPalindrome(["ab","ty","yt","lc","cl","ab"]), '---> 8')

console.log(longestPalindrome(["cc","ll","xx"]), '---> 2')
