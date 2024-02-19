/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sortedArr = arr.sort((a, b) => b - a)
    const diff = sortedArr[0] - sortedArr[1]

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] - sortedArr[i + 1] === diff) continue
        else return false 
    }
    return true
};