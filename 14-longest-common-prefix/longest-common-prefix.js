/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const testStr = strs[0];

    for (let i in testStr) {
        if (!strs.every(str => str[i] === testStr[i])) return testStr.slice(0, i);
    }
    return testStr;
};