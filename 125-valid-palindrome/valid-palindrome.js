/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return newS.split("").reverse().join("") === newS ? true : false;
};