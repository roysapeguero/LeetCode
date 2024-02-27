/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let key = {
        'U': +1,
        'D': -1,
        'R': +1.5,
        'L': -1.5
    }

    let total = 0

    for (let move of moves) {
        total += key[move]
        console.log(total)
    }

    return total === 0
};