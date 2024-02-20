/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let count = new Map()
    count.set(1, '1')

    for (let i = 2; i <= n; i++) { 
        let prev = count.get(i - 1) 
        let l = 0, r = 0
        let next = ''

        while (r <= prev.length) { 
            let curr = prev[l]
            if (curr !== prev[r]) {
                next += String(r - l) 
                next += curr
                l = r
            }
            r++
        }
        count.set(i, next)
    }
    return count.get(n)
};