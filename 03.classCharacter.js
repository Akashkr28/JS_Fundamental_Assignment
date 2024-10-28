function findMatches(inputString, pattern) {
    const regex = new RegExp(pattern, 'g'); // Create a regular expression with global flag
    return inputString.match(regex) || []; // Return matches or an empty array if none found
}

// Test cases
const testString = "Hello World! 1234 @JavaScript#";

console.log("Input String: ", testString);

// Find digits
const digitPattern = '\\d'; // Character class for digits
const digitMatches = findMatches(testString, digitPattern);
console.log("Digits: ", digitMatches);

// Find uppercase letters
const uppercasePattern = '[A-Z]'; // Character class for uppercase letters
const uppercaseMatches = findMatches(testString, uppercasePattern);
console.log("Uppercase Letters: ", uppercaseMatches);

// Find lowercase letters
const lowercasePattern = '[a-z]'; // Character class for lowercase letters
const lowercaseMatches = findMatches(testString, lowercasePattern);
console.log("Lowercase Letters: ", lowercaseMatches);

// Find special characters
const specialCharPattern = '[^a-zA-Z0-9]'; // Character class for special characters (not letters or digits)
const specialCharMatches = findMatches(testString, specialCharPattern);
console.log("Special Characters: ", specialCharMatches);
