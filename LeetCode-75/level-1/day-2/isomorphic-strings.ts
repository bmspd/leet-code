// Two strings s and t are isomorphic if the characters in s can be replaced to get t

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  let acc = {}
  const used = []
  for (let i = 0; i < s.length; i++) {
    if (!acc[s[i]]) {
      if (used.includes(t[i])) return false
      acc[s[i]] = t[i]
      used.push(t[i])
    } else if (acc[s[i]] !== t[i]) {
      return false
    }
  }
  return true
}

console.log(isIsomorphic("egg", "add"), "--> TRUE")

console.log(isIsomorphic("foo", "bar"), "--> FALSE")

console.log(isIsomorphic("paper", "title"), "--> TRUE")

console.log(isIsomorphic("badc", "baba"), "--> FALSE")