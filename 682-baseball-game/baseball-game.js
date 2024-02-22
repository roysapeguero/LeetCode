/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = 0
    let stack = []

    for (let op of operations) {
        let [top1, top2] = [stack.length - 1, stack.length - 2]
        let val;

        switch(op) {
            case 'C':
                score -= stack.pop()
                break; 
            case 'D':
                val = stack[top1] * 2
                stack.push(val)
                score += val
                break;
            case '+':
                val = stack[top1] + stack[top2]
                stack.push(val)
                score += val
                break; 
            default:
                stack.push(+op)
                score += +op
                break;
        }
    }
    return score
};