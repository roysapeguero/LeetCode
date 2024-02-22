/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // store split str in splitUp
    // iterate from the end of splitUp
    // get the length of splitUp at the last index that is not an empty string

    let splitUp = s.split(' ')
    
    for (let i = splitUp.length -1; i >= 0; i--) {
        if (!splitUp[i]) continue
        return splitUp[i].length
    }
};