// Leetcode #128
// https://leetcode.com/problems/longest-consecutive-sequence/

// attempt on 12/21/21 using solution from youtube: https://www.youtube.com/watch?v=P6RZZMu_maU
// Max Time Exceeded on edge case: 
var longestConsecutive = function(nums) {
    let longest = 0;
    let set = new Set(nums);
    
    set.forEach((item) => {
        let length = 0;
        while (set.has(item + length)) {
            length++;
            longest = Math.max(length, longest);
        }
    })     
  return longest; 
}
