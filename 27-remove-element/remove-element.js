/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 1. create left and right pointers set to 0
    // 2. use while loop to iterate over the nums array
    // 3. conditional to check if the right value is not equal to the target value
    //    a. make the value at the left pointer equal the value at the right pointer
    //    b. increment the left pointer
    // 4. increment the right pointer at every iteration
    // 5. return the left pointer

    let [l, r] = [0, 0]

    while (r < nums.length) {
        if (nums[r] !== val) {
            nums[l] = nums[r]
            l++
        }
        r++
    }
    return l
};