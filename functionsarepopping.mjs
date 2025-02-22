import test from "./test.mjs";

//#region function -----------------------------------------------------------------
// Write your function her.

function squareOfNumber(number) {
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
const tests = test("Tests squareOfNumber");

tests.isEqual(squareOfNumber(5), 25, "The square of 5 should be 25");
tests.isEqual(squareOfNumber(-5), 25, "The square of -5 should be 25");
tests.isEqual(squareOfNumber("hi"), NaN, "The square of -5 should be 25");

// Invalid inputs


// Edge cases



//#endregion