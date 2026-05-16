"use strict";
function generationOfSubsets(array) {
    const result = [];
    function backtrack(index, currentSet) {
        if (index === array.length) {
            result.push([...currentSet]);
            return;
        }
        currentSet.push(array[index]);
        backtrack(index + 1, currentSet);
        currentSet.pop();
        backtrack(index + 1, currentSet);
    }
    backtrack(0, []);
    return result.sort((a, b) => a.length - b.length);
}
const array = [1, 2, 3];
const arraySets = generationOfSubsets(array);
arraySets.forEach((set) => {
    document.write(`[${set.join(", ")}]<br>`);
});
