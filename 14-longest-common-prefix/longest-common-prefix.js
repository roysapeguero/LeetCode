/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let testStr = strs[0] 
    let prefix = ''
    for (let i in testStr) {
        if (strs.some(str => str[i] !== testStr[i])) break;
        else prefix += testStr[i]
    }
    return prefix
};