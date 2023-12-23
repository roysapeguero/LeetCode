/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}

    for (let [i,num] of nums.entries()) {
        if (hash[target - num] !== undefined) {
            return [hash[target - num], i]
        }
        hash[num] = i
    }
};