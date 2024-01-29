---
layout: default
title: "LeetCode Problem: 13.Roman to Integer"
---

# 13. Roman to Integer

## Problem
[Roman to Integer Problem on LeetCode](https://leetcode.com/problems/roman-to-integer/description/)

___

## My Solution
### typescript

#### Final Solution
```typescript
const roman :any = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const integers = s.split('').map(c => roman[c]);
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};
```

___

## Explanation
1. **Roman Numeral Map**

   The function defines a roman object that serves as a map for Roman numerals and their corresponding values.
   ```typescript
      const roman: any = {
         I: 1,
         V: 5,
         X: 10,
         L: 50,
         C: 100,
         D: 500,
         M: 1000,
      };
   ```
2. **Convert Roman to Integer**

   The function romanToInt takes a Roman numeral string s as input.
   It splits the string into individual characters, maps each character to its integer value using the roman object, and stores these values in an integers array.

   ```typescript
    const integers = s.split('').map(c => roman[c]);
   ```

3. **Calculate the Integer Value**

   The function calculates the integer value of the Roman numeral by reducing the integers array.
   It iterates through the array, and if the current value is less than the next value, it subtracts the current value from the accumulator (acc). Otherwise, it adds the current value to the accumulator.
   The result is the final integer representation of the Roman numeral.
   ```typescript
      return integers.reduce((acc, x, i) => x < integers[i + 1] ? acc - x : acc + x, 0);
   ```

___
## Common Techniques

- Using `s.split('').map(c => roman[c])`, it converts a Roman numeral string s into an array of corresponding integer values by splitting the string and mapping each character to its integer value.
- Using `reduce()`, it iteratively calculates the integer value of the Roman numeral string. It employs addition or subtraction based on Roman numeral rules by comparing adjacent integers in the array.

[back](/)


