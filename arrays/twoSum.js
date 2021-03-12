// 1. Two Sum
// Easy
//
// 19713
//
// 692
//
// Add to List
//
// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// O(n^2) Naive solution
// var twoSum = function(nums, target) {
// for(let i = 0; i < nums.length - 1; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] + nums[j] === target) return [i, j]
//     }
// }
// return
// }

// var twoSum = function(nums, target) {
// misread the problem.. should return index not the nums
// O(nlog(n))
// let numsArr = nums.sort((a, b) => (a-b));
// let ptr1 = 0;
// let ptr2 = numsArr.length - 1;
// while(numsArr[ptr1] + numsArr[ptr2] != target){
//       if(numsArr[ptr1] + numsArr[ptr2] > target){
//           ptr2--;
//       } else {
//           ptr1++;
//       }
// }
// return [numsArr[ptr1], numsArr[ptr2]]
// }

// O(n) best solution
var twoSum = function (nums, target) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];
    if (n in numMap) return [numMap[n], i];
    numMap[nums[i]] = i;
  }
  return;
};

console.log(twoSum([2, 7, 11, 15], 9));
