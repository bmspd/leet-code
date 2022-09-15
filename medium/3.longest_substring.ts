function lengthOfLongestSubstring(s: string): number {
  let counter = 0;
  let tmpString = ''
  for (let i = 0; i < s.length; i++) {
    let j = i
    while (!tmpString.includes(s[j]) && s[j]) {
      tmpString += s[j]
      j++;
    }
    if (tmpString.length > counter) counter = tmpString.length
    tmpString = ''
  }
  return counter

}



console.log(lengthOfLongestSubstring("dvdf"))