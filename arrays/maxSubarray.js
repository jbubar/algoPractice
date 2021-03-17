/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  greatest = nums[0];
  current = 0;

  for (let num of nums) {
    current = num + current > 0 ? num + current : 0;
    if (num > greatest) greatest = num;
    if (current > 0 && current > greatest) greatest = current;
  }

  return greatest;
};
