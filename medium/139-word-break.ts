function wordBreak(s: string, wordDict: string[]): boolean {
  const set = new Set<string>()
  const backtrack = (bString: string) => {
    if (set.has(bString)) return false
    if (s === bString) return true
    if (s.length < bString.length || !s.startsWith(bString)) return false
    set.add(bString)
    for (let i = 0; i < wordDict.length; i++)
    if (backtrack(bString + wordDict[i])) return true
    return false
  }
  return backtrack("")
};

console.log(wordBreak("leetcode", ["leet", "code"]) === true)
console.log(wordBreak("applepenapple", ["apple", "pen"]) === true)
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]) === false)
console.log(wordBreak("ccbb", ['cb', 'bc']) === false)
console.log(wordBreak("bccdbacdbdacddabbaaaadababadad", ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"]) === true)