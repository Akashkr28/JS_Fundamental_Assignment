function outerFunction (param) {
    const outerVariable = "I am from Outer Function"
    return function innerFunction() {
        console.log(`Parameter: ${param}`);
        console.log(`Outer variable: ${outerVariable}`);
    }
}

const innerFunc = outerFunction("Hello! Everyone");

innerFunc()

/**Output:
    Parameter: Hello! Everyone
    Outer variable: I am from Outer Function
 */