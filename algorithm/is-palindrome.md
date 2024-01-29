---
layout: default
title: "LeetCode Problem: 9.isPalindrome"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# isPalindrome

## Problem
[isPalindrome Problem on LeetCode](https://leetcode.com/problems/palindrome-number/description/)

___

## My Solution
### typescript

#### Final Solution
```typescript
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
```

___

## Explanation
1. **Check for Negative Numbers and Numbers Ending with Zero**

   The function checks if x is negative or ends with zero (except for zero itself). It returns false for such cases, eliminating non-palindromic numbers.
   ```typescript
      if (x < 0 || (x % 10 === 0 && x != 0)) {
         return false;
      }
   ```
2. **Initialize Variables**

   It initializes reversed to zero, which will store the reversed version of x.
   ```typescript
    let reversed = 0;
   ```

3. **Current Number and Difference**

   Using a while loop, it reverses x by adding its last digit to reversed and removing that digit from x.
   ```typescript
      while (x > reversed) {
         reversed = reversed * 10 + x % 10;
         x = Math.floor(x / 10);
      }
   ```
4. **Check for Palindrome**

   Finally, it checks if x is equal to reversed, indicating a palindrome. Additionally, it checks if x is equal to reversed with the last digit removed, accommodating odd-digit palindromes.
   ```typescript
      return x === reversed|| x === Math.floor(reversed / 10)
   ```
___
## Common Techniques

- Using `x % 10` to check the last digit.
- Using `Math.floor(x / 10)` to remove the last digit.

[Back to Home](../)
