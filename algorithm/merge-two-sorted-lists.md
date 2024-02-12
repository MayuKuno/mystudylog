---
layout: default
title: "LeetCode Problem: 21. Merge Two Sorted Lists"
---
[Home](../) > [Algorithm](./) > {{ page.title }}

# Merge Two Sorted Lists

## Problem
[Merge Two Sorted Lists on LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/description/)

___

## My Solution
### with TypeScript

#### Final Solution
```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

___

## Explanation
1. **Base Case for Recursion**

   The function begins by checking if either of the input lists (l1 or l2) is null. This check is crucial for handling the base case of the recursion, where one of the lists has been fully merged and only nodes from the other list remain.

   ```typescript
      if (l1 === null) {
          return l2;
      }
      if (l2 === null) {
          return l1;
      }
   ```
2. **Comparing Node Values**

   The core of the function lies in comparing the values (val) of the current nodes of both lists (l1 and l2). This comparison determines which node should come next in the merged list based on the sort order.

   ```typescript
    if (l1.val < l2.val) {
        ...
    } else {
        ...
    }
   ```

3. **Recursive Merging**

   If the current node of l1 has a smaller value, the function sets l1.next to the result of a recursive call, merging the rest of l1 with l2. This effectively stitches l1's current node into the merged list and continues sorting the remaining nodes. Conversely, if l2's node is smaller or equal, it does the same by setting l2.next to the result of merging l1 with the rest of l2.

   ```typescript
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
   ```

   ```typescript
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
   ```

4. **Building the Merged List**

   Each recursive call returns a node (l1 or l2) that becomes the next part of the merged list. This building process continues until one of the lists is fully traversed, at which point the remaining nodes of the other list are appended to the merged list.

5. **Returning the Head of the Merged List**

   The function ultimately returns the head of the newly merged list. The head is determined by the initial comparison of l1 and l2, and subsequent nodes are added through the recursive merging process.

___
## Common Techniques

- **Recursion**
  - **Base Case:** Essential for stopping the recursion. Without a base case, the function would call itself indefinitely, leading to a stack overflow error.
  - **Recursive Case:** The function calls itself with a different argument, moving closer to the base case with each call.

    Example of simple recursion
    ```typescript
      function factorial(n: number): number {
        // Base case: if n is 0 or 1, return 1
        if (n === 0 || n === 1) {
            return 1;
        }
        // Recursive case: return n * factorial of (n-1)
        else {
            return n * factorial(n - 1);
        }
      }
    ```

[Back to Home](../)
