const isOpen = (char: string) => char === "(" || char === "[" || char === "{";
const isClosed = (char: string) => char === ")" || char === "]" || char === "}";
const isClosedRight = (open: string, close: string) =>
  (open === "(" && close === ")") ||
  (open === "[" && close === "]") ||
  (open === "{" && close === "}");
function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) stack.unshift(s[i]);
    else {
      if (isClosedRight(stack[0], s[i])) {
        stack.shift();
      } else return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("()") === true);
console.log(isValid("((()))") === true);
console.log(isValid("()[]{}") === true);
console.log(isValid("(]") === false);
