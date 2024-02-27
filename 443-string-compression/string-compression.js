/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0
    let r = 1

    let length = chars.length

    while (r <= length) {
        let currChar = chars[l]
        let nextChar = chars[r]
        if (nextChar !== currChar || r === length) {
            chars.push(currChar)
            if (r - l > 1 || r - l > 10) chars.push( ...String(r - l).split('') )
            l = r 
        }
        r++ 
    }
    chars = chars.splice(0, length)
    return chars.length 
};