/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const testStr = strs[0];

    for (let i = 0; i < testStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== testStr[i]) return testStr.slice(0, i);
        }
    }
    return testStr;
};