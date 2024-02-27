/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0
    let r = 1
    let s = ''

    let length = chars.length

    while (r <= length) {
        if (chars[r] !== chars[l] || r === length) {
            s += chars[l] 
            if (r - l !== 1) s += r - l 
            l = r 
            chars.push( ...s.split('') ) 
            s = '' 
        }
        r++ 
    }

    chars = chars.splice(0, length)
    return chars.length 

};