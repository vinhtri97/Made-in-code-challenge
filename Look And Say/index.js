const fs = require('fs')

/** Function flows:
* 1. Parse input to array of number 
* 2. Use ES6 array reduce function prototype to loop through the array
     If next value equal to current value, increment count and continue
     If next value is not equal to current value, create new pair and add to the accumulator   
*/
/**
 * Returns boolean indicates that input string is palindrome or not.
 * @param {any} input The array of numbers 
 * 
 */
const lookAndSay = numbers => {
    let count = 1;
    return numbers.reduce((accumulator, currentValue, index) => {
        if (currentValue === numbers[index+1]) {
            count++;
            return accumulator;
        }
        else {
            const newPair = [count, currentValue];
            count = 1;
            return [...accumulator, newPair];
        }
    }, [])
}

const main = function(){
    const input = fs.readFileSync('./file.txt', 'utf-8')
    const sanitizedInput = input.split(',').map(number => parseInt(number))
    const isInputValid = sanitizedInput.filter(number => number == NaN).length === 0;
    if (!isInputValid) {
        console.log('Your input is not valid')
    }
    console.log(lookAndSay(sanitizedInput));
}();
