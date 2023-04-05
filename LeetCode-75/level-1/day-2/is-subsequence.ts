function isSubsequence(s: string, t: string): boolean {
  if (t.length < s.length) return false
  let counter = 0;
  for (let i = 0; i < t.length && counter !== t.length; i++) {
    if (t[i] === s[counter]) counter++
  }
  return counter === s.length
}

console.log(isSubsequence("abc", "ahbgdc"), "--> TRUE")

console.log(isSubsequence("axc", "ahbgdc"), "--> FALSE")

console.log(isSubsequence("ab", "baab"), "--> TRUE")