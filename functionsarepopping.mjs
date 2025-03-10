import test from "./test.mjs";

//#region function -----------------------------------------------------------------
// Write your function her.

function squareOfNumber(number) {
    if (typeof number !== "number") {
        return NaN;
    }
    let square = number * number;
    return square;
}

function lengthInInchToMm(length) {
    if (typeof length !== "number" || length < 0) {
        return NaN;
    }
    let mm = length * 25.4;
    return mm;
}

function squareRootOfNumber(number) {
    if (typeof number !== "number" || number < 0) {
        return NaN
    }
    let squareRoot = number ** 0.5;
    return squareRoot
}

function cubeOfNumber(number) {
    if (typeof number !== "number") {
        return NaN
    }
    let cube = number ** 3;
    return cube
}

function areaOfCircle(radius) {
    if (typeof radius !== "number" || radius < 0) {
        return NaN;
    }
    let circle = 3.14 * (radius ** 2);
    return circle;
}

function greeting(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Hello there!";
    }
    let greet = "Hello " + name.trim();
    return greet;
}

//#endregion




//#region Tests --------------------------------------------------------------------
// Write your tests her.
const squareTests = test("Tests squareOfNumber");

squareTests.isEqual(squareOfNumber(5), 25, "The square of 5 should be 25");
squareTests.isEqual(squareOfNumber(-5), 25, "The square of -5 should be 25");
squareTests.isEqual(squareOfNumber(0), 0, "The square of 0 should be 0");
squareTests.isEqual(squareOfNumber(0.5), 0.25, "The square of 0.5 should be 0.25");

// Invalid inputs
squareTests.isNotANumber(squareOfNumber("5"), "Should return NaN for string input");
squareTests.isNotANumber(squareOfNumber(null), "Should return NaN for null input");
squareTests.isNotANumber(squareOfNumber(undefined), "Should return NaN for undefined input");

squareTests.dosNotThrowError(() => squareOfNumber("test"), "Should not throw error for invalid input");
squareTests.dosNotThrowError(() => squareOfNumber(null), "Should not throw error for null");

const lengthTests = test("Tests lengthInInchToMm");

lengthTests.isEqual(lengthInInchToMm(1), 25.4, "1 inch should be 25.4 mm");
lengthTests.isEqual(lengthInInchToMm(0), 0, "0 inches should be 0 mm");
lengthTests.isEqual(lengthInInchToMm(0.5), 12.7, "0.5 inches should be 12.7 mm");

// Invalid inputs
lengthTests.isNotANumber(lengthInInchToMm(-5), "Should return NaN for negative length");
lengthTests.isNotANumber(lengthInInchToMm("5"), "Should return NaN for string input");
lengthTests.isNotANumber(lengthInInchToMm(null), "Should return NaN for null input");
lengthTests.isNotANumber(lengthInInchToMm(undefined), "Should return NaN for undefined input");

lengthTests.dosNotThrowError(() => lengthInInchToMm(-1), "Should not throw error for negative input");
lengthTests.dosNotThrowError(() => lengthInInchToMm("test"), "Should not throw error for invalid input");

const squareRootTests = test("Tests squareRootOfNumber");

squareRootTests.isEqual(squareRootOfNumber(16), 4, "The squareroot of 16 should be 4");
squareRootTests.isEqual(squareRootOfNumber(0), 0, "The squareroot of 0 should be 0");
squareRootTests.isEqual(squareRootOfNumber(2), Math.sqrt(2), "The squareroot of 2 should match javascripts in-built function Math.sqrt(2)");

// Invalid inputs
squareRootTests.isNotANumber(squareRootOfNumber(-5), "Should return NaN for negative number");
squareRootTests.isNotANumber(squareRootOfNumber("5"), "Should return NaN for string input");
squareRootTests.isNotANumber(squareRootOfNumber(null), "Should return NaN for null input");
squareRootTests.isNotANumber(squareRootOfNumber(undefined), "Should return NaN for undefined input");

squareRootTests.dosNotThrowError(() => squareRootOfNumber(-1), "Should not throw error for negative input");
squareRootTests.dosNotThrowError(() => squareRootOfNumber("test"), "Should not throw error for invalid input");

const cubeTests = test("Tests cubeTests");

cubeTests.isEqual(cubeOfNumber(16), 4096, "The cube of 16 should be 4096");
cubeTests.isEqual(cubeOfNumber(-2), -8, "The cube of -2 should be -8");
cubeTests.isEqual(cubeOfNumber(0), 0, "The cube of 0 should be 0");
cubeTests.isEqual(cubeOfNumber(1), 1, "The cube of 1 should be 1");

// Invalid inputs
cubeTests.isNotANumber(cubeOfNumber("5"), "Should return NaN for string input");
cubeTests.isNotANumber(cubeOfNumber(null), "Should return NaN for null input");
cubeTests.isNotANumber(cubeOfNumber(undefined), "Should return NaN for undefined input");

cubeTests.dosNotThrowError(() => cubeOfNumber(null), "Should not throw error for null");
cubeTests.dosNotThrowError(() => cubeOfNumber("test"), "Should not throw error for invalid input");

const circleTests = test("Tests circleTests");

circleTests.isEqual(areaOfCircle(1), 3.14, "area of circle with radius 1 should be 3.14");
circleTests.isEqual(areaOfCircle(0), 0, "area of circle with radius 0 should be 0");
circleTests.isEqual(areaOfCircle(2), 12.56, "are of circle with radius 2 should be 12.56");

// Invalid inputs
circleTests.isNotANumber(areaOfCircle(-5), "Should return NaN for negative radius");
circleTests.isNotANumber(areaOfCircle("5"), "Should return NaN for string input");
circleTests.isNotANumber(areaOfCircle(null), "Should return NaN for null input");
circleTests.isNotANumber(areaOfCircle(undefined), "Should return NaN for undefined input");

circleTests.dosNotThrowError(() => areaOfCircle(-1), "Should not throw error for negative input");
circleTests.dosNotThrowError(() => areaOfCircle("test"), "Should not throw error for invalid input");

const greetingTests = test("Tests greetingTests");

greetingTests.isEqual(greeting("Alexander"), "Hello Alexander", "Greeting Alexander should return Hello Alexander");
greetingTests.isEqual(greeting("Per"), "Hello Per", "Greeting Per should return Hello Per");
greetingTests.isEqual(greeting(" James "), "Hello James", "Greeting  James  should return Hello James");

// Invalid inputs
greetingTests.isEqual(greeting(""), "Hello there!", "empty string should return Hello There!");
greetingTests.isEqual(greeting("  "), "Hello there!", "white space should return Hello There!");
greetingTests.isEqual(greeting(null), "Hello there!", "null should return Hello There!");
greetingTests.isEqual(greeting(undefined), "Hello there!", "undefined should return Hello There!");
greetingTests.isEqual(greeting(123), "Hello there!", "integers should return Hello There!");

greetingTests.dosNotThrowError(() => greeting(null), "Should not throw error for null");
greetingTests.dosNotThrowError(() => greeting(undefined), "Should not throw error for undefined");
greetingTests.dosNotThrowError(() => greeting(123), "Should not throw error for integers");

//#endregion