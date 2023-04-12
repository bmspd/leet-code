function longestPalindrome(s: string): number {
  const letters: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (letters[letter]) letters[letter] += 1
    else letters[letter] = 1
  }
  let needExtraLetter = false
  let counter = 0;
  Object.values(letters).forEach((value) => {
    if (value % 2 === 0) counter += value
    else if (!needExtraLetter) {
      needExtraLetter = true
      counter += value
    }
    else if (value > 2) counter += value - 1
  })
  return counter
}

console.log(longestPalindrome("abccccdd"), "---> 7")

console.log(longestPalindrome("a"), "---> 1")