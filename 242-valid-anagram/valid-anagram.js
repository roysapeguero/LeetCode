/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let count = new Map()

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1)
    }

    for (let char of t) {
        count.set(char, count.get(char) - 1)
        if (count.get(char) === 0) {
            count.delete(char)
        }
    }
    
    return !count.size
};