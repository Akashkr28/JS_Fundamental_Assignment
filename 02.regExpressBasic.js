function regexMatch(pattern, str) {
    // Create a regular expression object from the pattern
    const regex = new RegExp(pattern);
    
    // Test if the string matches the regex pattern
    return regex.test(str);
}

// Test cases
const tests = [
    { pattern: '^hello', str: 'hello world', expected: true }, // Starts with 'hello'
    { pattern: 'world$', str: 'hello world', expected: true }, // Ends with 'world'
    { pattern: 'l+o', str: 'hello', expected: true },          // Contains 'l' followed by 'o'
    { pattern: '^[A-Z].*$', str: 'Hello', expected: true },    // Starts with uppercase letter
    { pattern: '[0-9]+', str: 'abc123', expected: true },      // Contains numbers
    { pattern: '^[a-z]+$', str: 'hello', expected: true },     // All lowercase letters
    { pattern: '^abc|xyz$', str: 'abc', expected: true },      // Matches 'abc' or 'xyz'
    { pattern: 'xyz', str: 'hello', expected: false },         // No match
];

// Run tests
tests.forEach(({ pattern, str, expected }) => {
    const result = regexMatch(pattern, str);
    console.log(`Pattern: "${pattern}", String: "${str}", Match: ${result}, Expected: ${expected}`);
});

// Outputs
/*  Pattern: "^hello", String: "hello world", Match: true, Expected: true
    Pattern: "world$", String: "hello world", Match: true, Expected: true
    Pattern: "l+o", String: "hello", Match: true, Expected: true
    Pattern: "^[A-Z].*$", String: "Hello", Match: true, Expected: true
    Pattern: "[0-9]+", String: "abc123", Match: true, Expected: true
    Pattern: "^[a-z]+$", String: "hello", Match: true, Expected: true
    Pattern: "^abc|xyz$", String: "abc", Match: true, Expected: true
    Pattern: "xyz", String: "hello", Match: false, Expected: false
*/