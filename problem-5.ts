/**
 * Description: Write a function that takes a string | number and returns:
The length if it's a string
The number multiplied by 2 if it's a number
Function Signature:
function processValue(value: string | number): number
Example:
processValue("hello"); // Output: 5
processValue(10);      // Output: 20
 */

type TValue = string | number;

function processValue(value: TValue): number{
    if (typeof value === "number") {
        return value * 2
    }
    return value.length;
}
console.log(processValue(10))