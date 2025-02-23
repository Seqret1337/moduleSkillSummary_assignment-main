import test from "./test.mjs";

//#region function -----------------------------------------------------------------
// Write your function her.
function flattenArray(array) {
    if (!Array.isArray(array)) {
        return [];
    }
    let result = [];
    let resultIndex = 0;

    function flatten(element) {
        if (Array.isArray(element)) {
            for (let i = 0; i < element.length; i++) {
                flatten(element[i]);
            }
        } else if (Number.isInteger(element)) {
            result[resultIndex] = element;
            resultIndex++;
        }
    }
    flatten(array);
    return result;
}

//#endregion


//#region Tests --------------------------------------------------------------------
// Write your tests her.
const flattenTests = test("Tests flattenArray");

const simpleArray = [1, 2, 3];
flattenTests.isEqual(flattenArray(simpleArray).join(","), "1,2,3", "Should handle simple array");

const oneLevelNestedArray = [1, [2,3], 4];
flattenTests.isEqual(flattenArray(oneLevelNestedArray).join(","), "1,2,3,4", "Should handle one level of nesting");

const deepNested = [1, [2, [3, 4], 5], 6];
flattenTests.isEqual(flattenArray(deepNested).join(","), "1,2,3,4,5,6", "Should handle multiple levels of nesting ");

const exampleArray = [435, 2028, [[3047, 4910, 8146, 7999, 1433, 7211, 1197, 6002], 2821, 3508]]
flattenTests.isEqual(flattenArray(exampleArray).join(","), "435,2028,3047,4910,8146,7999,1433,7211,1197,6002,2821,3508", "Should handle the example array");

flattenTests.isEqual(flattenArray([]).join(","), "", "Should handle empty array");
flattenTests.isEqual(flattenArray([[], [], []]).join(","), "", "Should handle nested empty arrays");
flattenTests.isEqual(flattenArray(null).join(","), "", "Should handle null input");
flattenTests.isEqual(flattenArray([1, "hello", 2, null, 3, undefined, 4.5]).join(","), "1,2,3", "Should only keep integers");

flattenTests.dosNotThrowError(() => flattenArray(null), "Should not throw error for null input");
flattenTests.dosNotThrowError(() => flattenArray([1, null, undefined, "hello", 2.5]), "Should not throw error for mixed input");
//#endregion