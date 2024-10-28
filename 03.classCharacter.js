function findMatches(inputString, pattern) {
    const regex = new RegExp(pattern, 'g'); // Create a regular expression with global flag
    return inputString.match(regex) || []; // Return matches or an empty array if none found
}

// Test cases
const testString = "Hello World! 1234 @JavaScript#";

console.log("Input String: ", testString);
// Output : Input String:  Hello World! 1234 @JavaScript#


// Find digits
const digitPattern = '\\d'; // Character class for digits
const digitMatches = findMatches(testString, digitPattern);
console.log("Digits: ", digitMatches);
// Output : Digits:  [ '1', '2', '3', '4' ]

// Find uppercase letters
const uppercasePattern = '[A-Z]'; // Character class for uppercase letters
const uppercaseMatches = findMatches(testString, uppercasePattern);
console.log("Uppercase Letters: ", uppercaseMatches);
// Output : Uppercase Letters:  [ 'H', 'W', 'J', 'S' ]

// Find lowercase letters
const lowercasePattern = '[a-z]'; // Character class for lowercase letters
const lowercaseMatches = findMatches(testString, lowercasePattern);
console.log("Lowercase Letters: ", lowercaseMatches);
// Output: Lowercase Letters:  [
//   'e', 'l', 'l', 'o',
//   'o', 'r', 'l', 'd',
//   'a', 'v', 'a', 'c',
//   'r', 'i', 'p', 't'
// ]

// Find special characters
const specialCharPattern = '[^a-zA-Z0-9]'; // Character class for special characters (not letters or digits)
const specialCharMatches = findMatches(testString, specialCharPattern);
console.log("Special Characters: ", specialCharMatches);
// Output : Special Characters:  [ ' ', '!', ' ', ' ', '@', '#' ]
