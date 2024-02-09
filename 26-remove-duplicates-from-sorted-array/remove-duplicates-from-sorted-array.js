/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 1

    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            l++
            nums[l] = nums[r]
        }
        r++
    }
    return l + 1
};