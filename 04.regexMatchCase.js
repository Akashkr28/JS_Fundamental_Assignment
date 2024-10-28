function extractDateComponents(inputString, pattern) {
    const regex = new RegExp(pattern); // Create a regular expression
    const match = inputString.match(regex); // Find matches

    if (match) {
        // Return an object with named groups if they exist
        const result = {};
        for (let i = 1; i < match.length; i++) {
            result[`Group ${i}`] = match[i]; // Store matched groups
        }
        return result;
    }
    return null; // Return null if no match found
}

// Test cases
const testString1 = "Today's date is 25-12-2023.";
const testString2 = "The event will be held on 01/11/2024.";

const datePattern1 = '(\\d{2})-(\\d{2})-(\\d{4})'; // Pattern for dd-mm-yyyy
const datePattern2 = '(\\d{2})/(\\d{2})/(\\d{4})'; // Pattern for dd/mm/yyyy

console.log("Input String 1: ", testString1);
const result1 = extractDateComponents(testString1, datePattern1);
console.log("Matched Groups (dd-mm-yyyy): ", result1);

console.log("Input String 2: ", testString2);
const result2 = extractDateComponents(testString2, datePattern2);
console.log("Matched Groups (dd/mm/yyyy): ", result2);

// Outputs :
/*Input String 1:  Today's date is 25-12-2023.
Matched Groups (dd-mm-yyyy):  { 'Group 1': '25', 'Group 2': '12', 'Group 3': '2023' }

Input String 2:  The event will be held on 01/11/2024.
Matched Groups (dd/mm/yyyy):  { 'Group 1': '01', 'Group 2': '11', 'Group 3': '2024' }*/