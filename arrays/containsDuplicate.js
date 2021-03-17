/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

// var containsDuplicate = function (nums) {
//   sorted = nums.sort();
//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) return true;
//   }
//   return false;
// };
