---
layout: default
title: "LeetCode Problem: 27. Remove Element"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# Remove Element

## Problem
[Remove Element on LeetCode](https://leetcode.com/problems/remove-element/description/)

___

## My Solution
### with TypeScript

#### Initial Attempt
In my initial attempt to solve the problem, I tried to solve by using splice() method.
However, appearently this solution has efficiency problem due to the repeated use of splice() within a loop.
Each splice() can shift many elements, making the overall time complexity approach O(n^2) in the worst case, especially if the element to be removed occurs frequently. 

Here's the code for the initial approach:

```typescript
function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
       if (nums[i] === val) { 
        nums.splice(i, 1); 
        i-- 
      }
  }
  return nums.length
}
```


#### Final Solution
```typescript
function removeElement(nums: number[], val: number): number {
    let j = 0;
    for (let n of nums) {
        if (n !== val) {
          nums[j++] = n  
        }
    }
    return j
};
```

___

## Explanation
1. **Initialize Pointer for New Array Length**

   The solution starts by initializing j to 0. This variable acts as a pointer and a counter for the new length of the array, which will exclude the specified value val. It also represents the position in the array where the next element not equal to val will be placed.

   ```typescript
      let j = 0;
   ```
2. **Iterate Through the Array**

   The loop iterates through each element n of the array nums. This iteration allows the function to examine each element and determine if it matches the value val that needs to be removed.

   ```typescript
    for (let n of nums) {
    }
   ```

3. **Check for Non-Matching Elements**

   Inside the loop, the function checks if the current element n does not match the value val. This step is crucial for identifying elements that should remain in the array.

   ```typescript
    if (n !== val) {
    }
   ```
4. **Move Non-Matching Elements and Increment Pointer**

   When an element that does not match val is found, the algorithm assigns this element to the position indicated by j in the array. This ensures that all elements not equal to val are moved to the beginning of the array. After assigning the element, j is incremented, effectively keeping track of the new length of the array and preparing the next position for any subsequent non-matching elements.

   ```typescript
    nums[j++] = n;
   ```

5. **Return the New Length of the Array**

    After the loop completes, the function returns j, the number of elements in the array that are not equal to val. This return value represents the new length of the array, with the first j elements being those that are not val. The elements beyond the jth position are not important, as specified by the problem statement.

___
## Common Techniques

- **Post-increment**

  post-increment is an operation that increases the value of a variable by one after its current value has been used in an expression. When you see j++ in an expression, it means "use j, then increment it."

  - `nums[j] = n;` assigns the value of n to the current position in the array indicated by j.
  - `j++;` increments the value of j by one, preparing it for the next operation.
  
    ```typescript
    nums[j++] = n;
    ```

    ↓ same as ↓

    ```typescript
    nums[j] = n 
    j++
    ```

[Back to Home](../)
<!-- bundle exec jekyll serve -->