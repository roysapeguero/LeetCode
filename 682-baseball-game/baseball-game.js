/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = 0
    let stack = []

    for (let op of operations) {
        if (op === 'C') {
            score -= stack.pop()
            continue
        } 
        if (op === 'D') {
            let val = stack[stack.length - 1] * 2
            stack.push(val)
            score += val
            continue
        }
        if (op === '+') {
            let val = stack[stack.length - 1] + stack[stack.length - 2]
            stack.push(val)
            score += val
            continue
        } 

        stack.push(+op)
        score += +op
    }
    return score
};