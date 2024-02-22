/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // iterate through s
    // if the char code is uppercase change letter
    let result = ''

    for (let i in s) {
        let charCode = s.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) result += String.fromCharCode(charCode + 32)
        else result += s[i]
    }
    return result
};