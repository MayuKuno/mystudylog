// Description
// https://leetcode.com/problems/palindrome-number/description/


// My Answer
function isPalindrome(x: number) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
      return false;
  }
  let reversed = 0;
  while (x > reversed) {
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
  }
  return x === reversed|| x === Math.floor(reversed / 10)
}

// const output = isPalindrome(3223)
// console.log(output)
// npx ts-node 9_isPalindrome.ts 