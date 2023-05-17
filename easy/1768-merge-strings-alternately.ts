function mergeAlternately(word1: string, word2: string): string {
  const longestWord = word1.length > word2.length ? word1.length : word2.length
  let res = ""
  for (let i = 0; i < longestWord; i++) {
    if (word1[i]) res += word1[i]
    if (word2[i]) res += word2[i]
  }
  return res
}


console.log(mergeAlternately("abc", "pqr") === "apbqcr")
console.log(mergeAlternately("ab", "pqrs") === "apbqrs")
console.log(mergeAlternately("abcd", "pq") === "apbqcd")