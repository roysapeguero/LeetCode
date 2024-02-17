/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // create a variable mergedWord initialized to '' that will store the result string
    // create a variable maxLength initialized to the length of the longest word
    // implement a loop that iterates through the indicies of longest word
    // conditional statement checking if word1[i] and word2[i] exist, add both ofthe words[i] to the mergedWord
    // else if word2[i] doesnt exist, return mergedWord + the rest of word1
    // else, return mergedWord + the rest of word2
    // return the variable mergedWord

    let mergedWord = ''
    let maxLength = Math.max(word1.length, word2.length)

    for (let i = 0; i < maxLength; i++) {
        if (word1[i] && word2[i]) mergedWord += word1[i] + word2[i]
        else if (!word2[i]) return mergedWord += word1.slice(i, word1.length)
        else return mergedWord += word2.slice(i, word2.length)
    }
    return mergedWord
};