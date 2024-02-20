/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let count = new Map()
    count.set(1, '1')

    for (let i = 2; i <= n; i++) { 
        let prev = count.get(i - 1) 
        let [l, r] = [0, 0]
        let next = ''

        while (r <= prev.length) { 
            let curr = prev[l]
            if (curr === prev[r]) {
                r++ 
            } else {
                next += String(r - l) 
                next += curr
                l = r
                r++
            }
        }
        count.set(i, next)
    }
    return count.get(n)
};