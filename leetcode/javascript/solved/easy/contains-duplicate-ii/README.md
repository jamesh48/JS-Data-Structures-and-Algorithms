## Contains Duplicate II

<!-- https://leetcode.com/problems/contains-duplicate-ii/ -->
<!-- LeetCode 219 -->

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

###### O - Boolean

###### I - nums = Number Input Array, k = number

###### C - `1 <= nums.length <= 105, -109 <= nums[i] <= 109, 0 <= k <= 105`

###### E - ...

###### Intuition --

Its important that both the indeces are within range of each other and that the numbers match. The Brute Force Solution of checking for both and returning true if both conditions were true and otherwise returning false by default proved to work but the order of the conditions was important, by putting the match first, the evaluator timed out because it was unnecessairly checking indeces that were out of range. So its more important to check if the indeces are within range and else to break that iteration if they are out of range. Only if they are within range is it necessary to check for equality of the actual values.
