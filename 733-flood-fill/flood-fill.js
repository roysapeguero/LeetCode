/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image;

    fill(image, sr, sc, image[sr][sc], color)
    return image
};

function fill(image, sr, sc, curr, color) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || curr !== image[sr][sc]) return;
    
    image[sr][sc] = color
    fill(image, sr + 1, sc, curr, color)
    fill(image, sr - 1, sc, curr, color)
    fill(image, sr, sc + 1, curr, color)
    fill(image, sr, sc - 1, curr, color)
}