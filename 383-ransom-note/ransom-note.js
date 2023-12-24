/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = {}

    for (let char of magazine) {
        if (hash[char] !== undefined) hash[char]++
        else hash[char] = 1
    }

    for (let char of ransomNote) {
        if (hash[char] > 0) hash[char]--
        else return false
    }
    return true
};