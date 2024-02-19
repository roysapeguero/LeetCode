/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // create left and right pointers
    // iterate through nums array
    // check if current numeber is a zero and swap with next non-zero number
    // return nums array
    let [l, r] = [0, 1]

    while (r < nums.length) {
        if (nums[l] === 0 && nums[r] !== 0) [nums[l], nums[r]] = [nums[r], 0]
        if (nums[l] !== 0) l++
        r++
    }
    return nums
};