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


//#endregion