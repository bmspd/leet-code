function longestCommonPrefix(strs: string[]): string {
  let longest = ''

  for (let i = 0; i < strs.length; i++) {
    if (longest === strs[i]) continue
    if (i === 0) longest = strs[i]
    else {
      let index = 0
      while (strs[i][index] === longest[index]) index++
      longest = longest.slice(0, index)
    }
    if (!longest) break
  }
  return longest
}

console.log(longestCommonPrefix(["flower","flow","flight"]) === 'fl')
console.log(longestCommonPrefix(["dog","racecar","car"]) === '')