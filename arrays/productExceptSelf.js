/**
 * @param {number[]} nums
 * @return {number[]}
 */
// initial aproach with division
// var productExceptSelf = function(nums) {
//     let zeroCount = 0
//     let product = nums.reduce((a, b) => {
//        if( b === 0 ){
//            zeroCount++
//             return a
//        } else {
//            return a * b
//        }
//     }, 1);
//     return nums.map((num) => {
//         if(zeroCount === 0){
//             return product / num
//         } else if (zeroCount === 1){
//             return num === 0 ? product : 0;
//         } else {
//             return 0;
//         }
//     });
// };

//after I looked
var productExceptSelf = function (nums) {
  let res = [];
  res[nums.length - 1] = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    res[i - 1] = nums[i] * res[i];
  }
  let left = 1;
  res.forEach((right, i) => {
    res[i] = left * right;
    left = left * nums[i];
  });
  return res;
};
