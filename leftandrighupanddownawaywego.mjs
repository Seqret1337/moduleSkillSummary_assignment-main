import test from "./test.mjs";
import nodes from "./example_files/nodes.json" assert { type: "json" };

//#region function -----------------------------------------------------------------
// Write your function her.

function getMax(a, b) {
    if (a > b) {
        return a
    }
    return b;
}

function calulateSum(node) {
    if (node === null) {
        return 0;
    }
    
    let total = node.value;

    let leftSum = calulateSum(node.left);
    total = total + leftSum;
   
    let rightSum = calulateSum(node.right);
    total = total + rightSum;

    return total;
}

function findDeepestLevel(node ,currentLevel) {
    if (currentLevel === undefined) {
        currentLevel = 1;
    }

    if (!node) {
        return 0;
    }

    if (!node.left && !node.right) {
        return currentLevel;
    }

    let leftDepth = findDeepestLevel(node.left, currentLevel + 1);
    let rightDepth = findDeepestLevel(node.right, currentLevel + 1);

    return getMax(leftDepth, rightDepth);
}

function countNodes(node) {
    if (!node) {
        return 0;
    }

    let count = 1;

    let leftCount = countNodes(node.left);
    let rightCount = countNodes(node.right);

    return count + leftCount + rightCount;
}

//#endregion


//#region Tests --------------------------------------------------------------------
// Write your tests her.
const nodesJson = nodes;

const nodesTest = test("Tests nodesTest");

const sum = calulateSum(nodesJson);
const deepestLevel = findDeepestLevel(nodesJson);
const nodeCount = countNodes(nodesJson);

nodesTest.isEqual(sum, 20903, "Total sum should be 20903");
nodesTest.isEqual(deepestLevel, 18, "Deepest level should be 18");
nodesTest.isEqual(nodeCount, 40 ,"Node count should be 40");
//#endregion