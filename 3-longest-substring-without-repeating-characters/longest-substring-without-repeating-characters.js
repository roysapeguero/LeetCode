/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // create a map to track characters seen
    // create a count to track of current substring
    // create a maxCount to track current max substring length
    // create a start that tracks the start of the substring
    // iterate through string 
    // if characters[char] is 1 then,
        // count reset to 0
        // clear characters seen
    // then always set the char to 1, increment count and update maxCount
    // return maxCount at the end

    const characters = new Map();
    let maxCount = 0;
    let count = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (characters.has(char) && characters.get(char) >= start) {
            start = characters.get(char) + 1;
            count = end - start; 
        }
        characters.set(char, end);
        count++;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};