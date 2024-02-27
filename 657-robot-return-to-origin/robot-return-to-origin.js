/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let vertical = 0
    let horizontal = 0

    for (let move of moves) {
        switch (move) {
            case 'U':
                vertical++
                break;
            case 'D':
                vertical--
                break;
            case 'R':
                horizontal++
                break;
            case 'L':
                horizontal--
                break;

        }
    }

    return !vertical && !horizontal
};