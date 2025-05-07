/**
 * Problem 3:
Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
Function Signature:
function concatenateArrays<T>(...arrays: T[][]): T[]
Example:
concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
 */

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}


// console.log(concatenateArrays(["a", "b"], ["c"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]))