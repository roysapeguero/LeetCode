/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // iterate through the string
        // check if the current chars rindex is equal to the current index
            // return the index
        // if the rindex is different 
            // continue
    // return -1

    for (let i = 0; i < s.length; i++) {
        if (i === s.indexOf(s[i]) && i === s.lastIndexOf(s[i])) return i
    }
    return -1

    // // create a map 
    // // iterate through the string 
    //     // map each char to its index
    //     // if the current char is already mapped, add the current index + previous
    // // iterate through the mapped values
    //     // look for the first instance of a char with only 1 index mapped and return
    // // return -1 if no values occur only once

    // const charIdx = new Map()

    // for (let char of s) {
    //     charIdx.set(char, (charIdx.get(char) || 0) + 1);
    // }

    // for (let i = 0; i < s.length; i++) {
    //     if (charIdx.get(s[i]) === 1) {
    //         return i;
    //     }
    // }

    // return -1 
};