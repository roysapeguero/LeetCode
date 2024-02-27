/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let total = 0

    for (let move of moves) {
        switch (move) {
            case 'U':
                total += 1
                break;
            case 'D':
                total -= 1
                break;
            case 'R':
                total += 1.5
                break;
            case 'L':
                total -= 1.5
                break;

        }
    }

    return total === 0
};