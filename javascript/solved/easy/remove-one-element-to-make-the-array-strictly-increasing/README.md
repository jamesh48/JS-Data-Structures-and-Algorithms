## Leetcode 1909: Remove One Element to Make the Array Strictly Increasing

<!-- https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/ -->

Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

Example 1:

Input: nums = [1,2,10,5,7]
Output: true
Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
[1,2,5,7] is strictly increasing, so return true.
Example 2:

Input: nums = [2,3,1,2]
Output: false
Explanation:
[3,1,2] is the result of removing the element at index 0.
[2,1,2] is the result of removing the element at index 1.
[2,3,2] is the result of removing the element at index 2.
[2,3,1] is the result of removing the element at index 3.
No resulting array is strictly increasing, so return false.
Example 3:

Input: nums = [1,1,1]
Output: false
Explanation: The result of removing any element is [1,1].
[1,1] is not strictly increasing, so return false.

###### O - Boolean

###### I - Input Arr

###### C - `2 <= nums.length <= 1000, 1 <= nums[i] <= 1000`

###### E - 2 numbers, numbers that are the same

###### Write Up

The question asks if by removing one item from the array can it be made to be strictly increasing. So we know we have to visit each index of the array and remove an the corresponding item each time and then test it. In my current solution I do just that, by looping over the array, and then mutating a new array by removing that index, from there its a simple test to see if every item is larger than the previous item and returning true on the first match, keeping in mind that the last arr[index + 1] is undefined, in this case if its undefined, we want that to be a truthy return.
