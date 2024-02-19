/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the least significant digit
    // If the digit is less than 9, increment and return
    // Otherwise, set the digit to 0 and continue to the next digit
    // If all digits were 9, so we need to add a new most significant digit

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
};