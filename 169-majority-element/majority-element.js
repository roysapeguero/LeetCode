/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}
    let majEle = 0
    
    for (let num of nums) {
        if (count[num]) count[num]++
        else count[num] = 1

        if (count[num] > nums.length/2) majEle = num
    }
    return majEle
};