---
layout: default
title: "LeetCode Problem: 1.Two Sum"
---

# Two Sum

## Problem
[Two Sum Problem on LeetCode](https://leetcode.com/problems/two-sum/description/)

## My Solution
### typescript
```typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let currentNumber = nums[i];
      let diff = target - currentNumber;
      if (map.has(diff)) {
          return [map.get(diff), i];
      }
      map.set(currentNumber, i);
  }
};
```

## Explanation
1. **Create a Map**

   Initialize an empty Map object called map <br>
   ```typescript
    const map = new Map();
   ```
   *Map is a data structure that allows you to store key-value pair

2. **Loop Through the Array**

   Go through each number in the nums array, one by one
   ```typescript
    for (let i = 0; i < nums.length; i++) {
    }
   ```

3. **Current Number and Difference**

   **Current Number:** The number we're looking at right now in the array.
   ```typescript
    let currentNumber = nums[i];
   ```
   **Difference:** Difference between the target number and the current number. This tells us what other number we need to find in the array to reach our target.
   ```typescript
    let diff = target - currentNumber;
   ```

4. **Check if We Have the Other Number**

   We check our map to see if it already has this "difference" number.
   If the map has this number, it means we've found two numbers that add up to the target. These are the current number and the number that corresponds to the difference.If we find it, we're done! We return the positions (indexes) of these two numbers.
   ```
   if (map.has(diff)) {
    return [map.get(diff), i];
   }
   ```

5. **Remember the Current Number**

   If we haven't found our pair yet, we remember the current number by storing it in the map. We keep its position (index) with it so we can use it later.
   ```typescript
   map.set(currentNumber, i);
   ```

6. **Keep Going Until We Find the Pair**

   We keep repeating this process for each number in the array.
   If we go through the whole array and don't find a pair that adds up to the target, the function ends without finding an answer (though, for this specific problem, it's assumed that there is always a solution).

[back](./)


