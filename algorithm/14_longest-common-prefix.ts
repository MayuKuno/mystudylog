// Description
// https://leetcode.com/problems/longest-common-prefix/description/

// My Answer
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
    
// const result = longestCommonPrefix(["flower","flow","flight"]);
// console.log(result);
// npx ts-node 14_longest-common-prefix.ts
  