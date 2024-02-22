/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // create variable length to track length
    // create variable foundLast to track if last word was found with bool
    // iterate from the end of s
        // if s[i] is not empty, increment length and found last = true
    // if found last is true and current char is an empty str return length

    let foundLast = false
    let length = 0
    
    for (let i = s.length -1; i >= 0; i--) {
        if (s[i] != ' ') {
            foundLast = true
            length++
        } else if (foundLast) break
    }
    return length
};