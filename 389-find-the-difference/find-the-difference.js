/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count = new Map()

    for (let char of t) {
        if (count.get(char)) count.set(char, count.get(char) + 1)
        else count.set(char, 1)
    }

    for (let char of s) {
        if (count.get(char)) count.set(char, count.get(char) - 1)
        if (count.get(char) === 0) {
            count.delete(char);
        }
    }
    return Array.from(count.keys())[0];  
};