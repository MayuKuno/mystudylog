---
layout: default
title: "LeetCode Problem: 14.Longest Common Prefix"
---

# 13. Roman to Integer

## Problem
[Longest Common Prefix Problem on LeetCode](https://leetcode.com/problems/longest-common-prefix/description/)

___

## My Solution
### typescript

#### Final Solution
```typescript
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
  
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
  
        if (prefix === '') {
            return prefix;
        }
    }
  
    return prefix;
  };
```
___

## Explanation
1. **Initialize Prefix**

   The function starts by initializing a prefix variable to the first string in the strs array.
   ```typescript
      let prefix = strs[0];
   ```
2. **Iterate Through Strings**

   It then enters a for loop that iterates through the strings in the strs array, starting from the second string (i = 1).

   ```typescript
    for (let i = 1; i < strs.length; i++) {
    }
   ```

3. **Find Common Prefix**

   Inside the loop, it uses a while loop to check if the current string strs[i] starts with the current prefix.
   If not, it shortens the prefix by removing its last character until a match is found.

   ```typescript
      while (!strs[i].startsWith(prefix)) {
         prefix = prefix.slice(0, -1);
      }
   ```
4. **Return Result**

   If the prefix becomes an empty string, it means there's no common prefix among the strings, so the function returns an empty string.
   ```typescript
      if (prefix === '') {
         return prefix;
      }
   ```
5. **Return Result**

   After iterating through all the strings, the function returns the prefix, which represents the longest common prefix among the strings in the strs array.
   ```typescript
      return prefix;
   ```

___
## Common Techniques

- Using `slice(0, -1)`, you can remove the last character  from a string.


[back](/)


