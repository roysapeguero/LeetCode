/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    let key = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (key[char] < key[s[i + 1]]) { 
            total += key[s[i+1]] - key[char] 
            i++
        } else total += key[char]
    } 
    return total
};