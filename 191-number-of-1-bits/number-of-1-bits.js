/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let nStr = n.toString(2), count = 0

    for (let num of nStr) {
        if (num === '1') count++
    }
    return count
};