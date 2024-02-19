/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = 1
    for (let num of nums) {
        product *= num
    }
    return product > 0 ? 1 : product < 0 ? -1 : 0
};