/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1

    while (start < end) {
        let mid = Math.floor(start + (end - start + 1) / 2)
        if (nums[mid] > target) end = mid - 1
        else start = mid
    }
    return nums[start] === target ? start : -1
};