/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

    while (students.length) {
        let curr = students.shift()

        if (curr !== sandwiches[0]) students.push(curr)
        else sandwiches.shift()

        if (students.indexOf(sandwiches[0]) === -1) break
    }
    return students.length
};