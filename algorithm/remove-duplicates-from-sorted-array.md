---
layout: default
title: "LeetCode Problem: 26. Remove Duplicates from Sorted Array"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# Remove Duplicates from Sorted Array

## Problem
[Remove Duplicates from Sorted Array on LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

___

## My Solution
### with TypeScript

#### Final Solution
```typescript
const removeDuplicates = (nums: number[]): number => {
    let k: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
```

___

## Explanation
1. **Initialize the Count of Unique Elements**

   The function begins by initializing k to 1, assuming the first element of the array is unique. This setup prepares the algorithm to compare and count unique elements.

   ```typescript
      let k: number = 1;
   ```
2. **Iterate Through the Array**

   The loop starts from the second element of the array, since the first element is already considered in the unique count. This iteration enables the function to compare each element with its predecessor to check for duplicates.

   ```typescript
    for (let i = 1; i < nums.length; i++) {
    }
   ```

3. **Compare Current Element with Previous**

   Inside the loop, the function compares the current element nums[i] with the previous one nums[i - 1]. This comparison is crucial for identifying duplicates.

   ```typescript
    if (nums[i] !== nums[i - 1]) {
    }
   ```

4. **Move Unique Elements and Increment Count**

   When a unique element is found (i.e., it is not equal to its predecessor), the algorithm moves this element to the kth position in the array. This ensures that the first k elements of the array will contain all the unique elements in their original order. After moving the unique element, it increments k to account for the newly found unique element.

   ```typescript
    nums[k] = nums[i];
    k++;
   ```
5. **Return the Count of Unique Elements**

   After completing the iteration through the array, the function returns k, the count of unique elements. This count represents the number of unique elements found in the array and also indicates that the first k elements of the array have been rearranged to contain these unique elements in their original order.

___
## Common Techniques

- **In-place algorithms**
  
  An in-place algorithm transforms data without needing extra space for a copy of the data, using only a small, fixed amount of extra storage space. The main idea is to modify the input data directly to produce the output, conserving memory usage.

   **Example of simple In-Place Strategy**
      
   Imagine you have an array of letters: A, B, C, D. You want to reverse it so it reads D, C, B, A using an in-place algorithm.


  - **Without In-Place Strategy:**

      You might create a new array and copy elements in reverse order from the original array. This needs extra space proportional to the size of the input array.
 
  - **With In-Place Strategy:**

      You swap the first and last elements, then move inward and swap the second and second-last elements, and so on, directly in the original array.
      
      1. Initial Array: A, B, C, D
      2. Swap 1: D, B, C, A (swap A and D)
      3. Swap 2: D, C, B, A (swap B and C)
      
      You've reversed the array using no extra space (except for a temporary variable for swaps).

[Back to Home](../)
<!-- bundle exec jekyll serve -->