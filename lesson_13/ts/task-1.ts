"use strict";

function generationOfSubsets<T>(array: T[]): T[][] {
  const result: T[][] = [];

  function backtrack(index: number, currentSet: T[]): void {
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

const array: number[] = [1, 2, 3];
const arraySets: number[][] = generationOfSubsets(array);

arraySets.forEach((set: number[]): void => {
  document.write(`[${set.join(", ")}]<br>`);
});
