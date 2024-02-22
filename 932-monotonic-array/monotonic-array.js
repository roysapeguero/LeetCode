/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = true
    let decreasing = true
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) increasing = false
        else if (nums[i] > nums[i - 1]) decreasing = false

        if (!increasing && !decreasing) return false
    }
    return true
};