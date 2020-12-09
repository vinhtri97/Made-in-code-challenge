
const fs = require('fs')
const input = fs.readFileSync('file.txt', 'utf-8'); 
/** Function flows:
* 1. Clean input string's non-character 
* 2. Run a loop through half of the string length.
     Compare a character at index i from the beginning and a character at index i from the end.
*    Returns false immediately in the loop if found 2 different characters from beginning and end.
*    Returns true after the loop is completed.
*/
/**
 * Returns boolean indicates that input string is palindrome or not.
 * @param {string} string The string that need to be checked for palindrome.
 * 
 */
const palindromeChecker = string => {
    const sanitizedInput = string.replace(/\W/g, '').toLowerCase()
    for (var i = 0; i <=  (sanitizedInput.length - 1) / 2; i++){
        if (sanitizedInput[i] !== sanitizedInput[sanitizedInput.length - 1 -i])
            return false;
    }
    return true;
}

const result = palindromeChecker(input)
console.log(`"${input.toString()}" is ${result ? '' : 'not '}palindrome`);

