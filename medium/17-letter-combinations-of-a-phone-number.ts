import lodash from "lodash";
const { isEqual } = lodash

const NUMBER_LETTERS = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  const backtrack = (current: string) => {
    if (current.length === digits.length) {
      if (current) res.push(current)
      return;
    }
    const currentDigit = digits[current.length];
    const currentLetters = NUMBER_LETTERS[currentDigit];
    for (let i = 0; i < currentLetters.length; i++) {
      backtrack(current + currentLetters[i]);
    }
  };
  backtrack("")
  return res
}


console.log(isEqual(letterCombinations("23"), ["ad","ae","af","bd","be","bf","cd","ce","cf"]) )
console.log(isEqual(letterCombinations(""), []))
console.log(isEqual(letterCombinations("2"), ["a","b","c"]))