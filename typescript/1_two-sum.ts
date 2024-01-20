// Description
// https://leetcode.com/problems/two-sum/description/


// My Answer
// `| undefined` is for testing
function twoSum(nums: number[], target: number): number[] | undefined {
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

// const output = twoSum([3,2,4],6)
// console.log(output)
// npx ts-node 1_two-sum.ts 