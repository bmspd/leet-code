function longestPalindrome(s: string): string {
  let currentLongest = [0, 1]
  const len = s.length
  const searchingPalindrome = (left: number, right: number) =>{
    while (left >= 0 && right < len) {
      if (s[left] !== s[right]) break;
      left--;
      right++;
    }
    return [left + 1, right]
  }
  for (let i = 0; i < s.length; i++) {
    const odd = searchingPalindrome(i - 1, i + 1)
    const even = searchingPalindrome(i - 1, i)
    const biggest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    currentLongest = currentLongest[1] - currentLongest[0] > biggest[1] - biggest[0] ? currentLongest : biggest
  }
  return s.slice(currentLongest[0], currentLongest[1])
}

console.log(longestPalindrome('bb'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))
