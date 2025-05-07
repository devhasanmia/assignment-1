/**
 * Problem 1:
Description: Create a function that takes a string and an optional boolean.

If the boolean is true or not provided, return the string in uppercase.
If the boolean is false, return the string in lowercase.
Function Signature:

function formatString(input: string, toUpper?: boolean): string
Example:

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"

 */

function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

// Case ==> 1
// console.log(formatString("Hello"))

// Case ==> 2
// console.log(formatString("TypeScript"));

// Case ==> 3
// console.log(formatString("JavaScript", false)); 