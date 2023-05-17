function maxVowels(s: string, k: number): number {
  const vowels = "aeiou"
  let result = 0
  for (let i = 0; i < s.length - k + 1; i++) {
    //const substr = s.substring(i, i + k)
    let vowelsCount = 0
    for (let j = i; j < i + k; j++) {
      if (result > i + k - j + vowelsCount) break
      if (vowels.includes(s[j])) vowelsCount++
    }
    //const vowelsCount = substr.split("").filter((el) => vowels.includes(el)).length
    if (vowelsCount === i + k) return vowelsCount
    if (vowelsCount > result) result = vowelsCount
  }
  return result
}

console.log(maxVowels("abciiidef",3) === 3)
console.log(maxVowels("aeiou",2) === 2)
console.log(maxVowels("leetcode",3) === 2)
console.log(maxVowels("weallloveyou", 7) === 4)