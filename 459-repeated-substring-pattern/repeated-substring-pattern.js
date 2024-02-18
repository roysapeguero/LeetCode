/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    
    if (len < 2) return false;
    
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        if (len % i === 0) {
            const repeatStr = s.slice(0, i);
            const times = len / i;
            if (repeatStr.repeat(times) === s) return true;
        }
    }
    
    return false;
};