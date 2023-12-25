/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const strip = str => {
        let newStr = []
        for (let char of str) {
            if (char === '#') newStr.pop()
            else newStr.push(char) 
        }
        return newStr.join('')
    }
    return strip(s) === strip(t)
};