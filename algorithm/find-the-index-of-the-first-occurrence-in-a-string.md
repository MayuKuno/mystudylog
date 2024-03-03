---
layout: default
title: "LeetCode Problem: 28. Find the Index of the First Occurrence in a String"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# Remove Element

## Problem
[Find the Index of the First Occurrence in a String on LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

___

## My Solution
### with TypeScript

#### Initial Attempt and Final Solution
In my initial attempt, I just went with the indexOf() method. Simple, right? 
But it turns out, there's a bit of a debate around this choice.  Interestingly, there's an alternative called the Rabin-Karp Algorithm, which could be a more favorable response during job interviews or similar scenarios. 
Knowing about the Rabin-Karp could definitely score you some points. But honestly, if we're talking real-life coding, I'd probably stick to the built-in functions. They just get the job done.

Here's the code:

```typescript
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};
```


___

## Explanation
1. **Utilize Built-in Method**

   The body of the function is a single line that utilizes the indexOf method. This method is a built-in JavaScript/TypeScript function that searches for a specified value within a string. If the value is found, indexOf returns the index of the first occurrence of the value. If the value is not found, it returns -1.

   ```typescript
    function strStr(haystack: string, needle: string): number {
      return haystack.indexOf(needle)
    };
   ```





___
## Common Techniques

- **Rabin-Karp Algorithm**

  The Rabin-Karp Algorithm is a string searching algorithm that looks for a specific pattern in a text. 

  Simple example

  Consider the pattern "abc" and the text "abdabcde". We want to find occurrences of "abc" within the text.

  1. **Hash of "abc":**
  
      Suppose the hash function gives "abc" a hash value of 123.

  2. **Text Scanning:**

      Hash of "abd" is calculated. Let's say it's 124. It doesn't match 123, so we move on.
      Next, we calculate the hash for "bda", and then "dab", and so on, until we reach "abc".
      When we reach "abc" at position 4, the hash value matches the pattern's hash (123).


  3. **Verification:**

      Upon finding a matching hash, we compare the substring "abc" from the text with the pattern "abc". They match exactly, confirming a pattern occurrence at position 4.


  If we use Rabin-Karp Algorithm for this problem?

  ```typescript
    function strStr(haystack: string, needle: string): number {
      // Early returns for edge cases
      if (!needle || !haystack) return 0; // If either string is empty, return 0
      if (needle.length === 0 || haystack === needle) return 0; // If needle is empty or both strings are equal
      if (needle.length > haystack.length) return -1; // If needle is longer than haystack, it's not found

      const targetHash = toHash(needle); // Calculate hash of the needle
      let currentHash: number; // Variable for the current window hash

      // Iterate over each possible window in 'haystack'
      for (let windowStart = 0; windowStart <= (haystack.length - needle.length); windowStart++) {
        if (currentHash === undefined) {
          // Calculate initial hash for the first window
          currentHash = toHash(haystack.slice(0, needle.length));
        } else {
          // Calculate rolling hash for subsequent windows
          currentHash -= haystack.charCodeAt(windowStart - 1) - 'a'.charCodeAt(0);
          currentHash += haystack.charCodeAt(windowStart + (needle.length - 1)) - 'a'.charCodeAt(0);
        }

        // If hashes match, verify characters one by one to confirm
        if (targetHash === currentHash) {
          let j: number;
          for (j = 0; j < needle.length; j++) {
            if (haystack[windowStart + j] !== needle[j]) break; // Mismatch found
          }
          if (j === needle.length) return windowStart; // Full match found
        }
      }

      return -1; // Return -1 if no match is found
    };

    // Helper function to calculate hash of a string
    function toHash(str: string): number {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i) - 'a'.charCodeAt(0); // Simple hash based on character codes
      }
      return hash;
    }
  ```

[Back to Home](../)
<!-- bundle exec jekyll serve -->