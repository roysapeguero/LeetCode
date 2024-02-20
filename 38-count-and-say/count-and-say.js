/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // create a map to keep track of the step and its result
    // iterate from 2 to n and map each value based on the previous 
    // 

    let count = new Map()
    count.set(1, '1')

    for (let i = 2; i <= n; i++) { // i = 3
        let prev = count.get(i - 1) // prev = '11'
        let j = 0
        let next = ''

        while (j < prev.length) { 
            // j = 0
            let curr = prev[j] // 1
            let k = 1 // k = 1 again
        
            while (prev[j + k] === curr) { // prev[1] = curr = 5
                k++ // k = 1
            }

            let stringCount = String(k) // '1'
            next += stringCount // next = '1'
            next += curr // next = '11'
            j += k // j = 1

            
        //     if (curr === prev[k]) {
        //         k++
        //     } else {
        //         next += k - j
        //         next += curr
        //         j = k
        //         k++
        //     }
        }
    count.set(i, next)
    }
    return count.get(n)
};


// l 
// 3322251
//   r