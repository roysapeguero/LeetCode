/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
        // XOR (^=) bitwise operator to update the result by XORing it with the current number num.   
        // To find the single non-repeating number.
        
        // If you XOR all the numbers in the array, the duplicates will cancel each other out, 
        // leaving only the non-repeating number.
    }

    return result;
};