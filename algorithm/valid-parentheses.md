---
layout: default
title: "LeetCode Problem: 20. Valid Parentheses"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# Valid Parentheses

## Problem
[Valid Parentheses Problem on LeetCode](https://leetcode.com/problems/valid-parentheses/description/)

___

## My Solution
### typescript

#### Final Solution
```typescript
function isValid(s: string): boolean {
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let openBracketsStack = []

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]

        if (['(', '[', '{'].includes(currentBracket)) {
            openBracketsStack.push(currentBracket)
        } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
            return false
        }
    }
    return !openBracketsStack.length
};
```

___

## Explanation
1. **Mapping Closing Brackets to Opening Brackets**

   The function begins by defining a bracketsMap object that maps each closing bracket to its corresponding opening bracket. This mapping is used to easily check if the bracket being processed is a closing bracket and if it matches the last opening bracket encountered.

   ```typescript
      const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
      }
   ```
2. **Initializing the Stack for Open Brackets**

   It initializes an array openBracketsStack to keep track of the opening brackets encountered but not yet matched with closing brackets. This stack helps ensure that brackets are closed in the correct order.

   ```typescript
    let openBracketsStack = []
   ```

3. **Iterating Through the String**

   The function iterates through each character in the string s. For each character, it determines if it is an opening or closing bracket.

   ```typescript
      for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]
      }
   ```
4. **Handling Opening Brackets**

   If the current character is an opening bracket `('(', '[', '{')`, it is added to openBracketsStack. This signifies that we have encountered an opening bracket that needs to be matched with a corresponding closing bracket later.
   ```typescript
      if (['(', '[', '{'].includes(currentBracket)) {
          openBracketsStack.push(currentBracket)
      }
   ```
5. **Handling Closing Brackets**

   If the current character is a closing bracket `(')', ']', '}')`, the function removes the last opening bracket from openBracketsStack and checks if it matches the current closing bracket using bracketsMap. If it doesn't match, the string is invalid, and the function returns false.
   ```typescript
      else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
          return false
      }
   ```
6. **Validating the Bracket Sequence**

   After processing all characters, if openBracketsStack is empty, it means every opening bracket was matched with a corresponding closing bracket in the correct order, so the function returns true. If there are any unmatched opening brackets left in the stack, the function returns false, indicating an invalid bracket sequence.
   ```typescript
      return !openBracketsStack.length
   ```
___
## Common Techniques

- Using `array.pop()` to removes the last element from the array and ro returns the removed element
- Using `!array.length`to check if the array is empty.

[Back to Home](../)
