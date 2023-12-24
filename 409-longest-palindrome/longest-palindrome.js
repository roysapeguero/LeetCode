/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {}
    let maxPal = 0

    for (let char of s) {
        if (hash[char] !== undefined) hash[char] += 1
        else hash[char] = 1

        if (hash[char] % 2 === 0) maxPal += 2
    }  

    return s.length > maxPal ? maxPal + 1 : maxPal
};