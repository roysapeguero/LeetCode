/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const increasing = (nums.toSorted((a, b) => a - b)).join(', ')
    const decreasing = (nums.toSorted((a, b) => b - a)).join(', ')
    const stringNums = nums.join(', ')

    if (increasing === stringNums) return true
    if (decreasing === stringNums) return true
    return false
};