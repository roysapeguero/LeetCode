/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for (let i in s) {
        let char = s[i]
        switch(char) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (char !== stack.pop()) return false
        }
    }
    return stack.length === 0
};