/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], currSum = 0;

    for (let n of nums) {
        if (currSum < 0) currSum = 0
        currSum += n

        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};