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
    let mm = length * 25.4;
    return mm;
}

function squareRootOfNumber(number) {
    
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
squareTests.dosNotThrowError(() => squareOfNumber("test"), "Should not throw error for null");

//#endregion