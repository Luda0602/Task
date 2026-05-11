"use strict";

// =====================================================
// Дано масив 30 випадкових цілих чисел.
// Підрахувати кількість обмінів під час сортування бульбашкою
// =====================================================

{
  // випадкове число
  function randomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // створення масиву
  function createList(size: number, min: number, max: number): number[] {
    const list: number[] = [];

    for (let i = 0; i < size; i++) {
      list.push(randomValue(min, max));
    }

    return list;
  }

  // тип результату
  type BubbleSortResult = {
    sorted: number[];
    swapsCount: number;
  };

  // сортування бульбашкою
  function bubbleSortStats(inputList: number[]): BubbleSortResult {
    let swapCounter: number = 0;

    const workList: number[] = inputList.slice();
    const length: number = workList.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (workList[j] > workList[j + 1]) {
          let tempValue: number = workList[j];

          workList[j] = workList[j + 1];
          workList[j + 1] = tempValue;

          swapCounter++;
        }
      }
    }

    return {
      sorted: workList,
      swapsCount: swapCounter,
    };
  }

  // початкові дані
  const numbersList: number[] = createList(30, 1, 100);

  // результат сортування
  const resultData: BubbleSortResult = bubbleSortStats(numbersList);

  // вивід
  document.write(`<h2>Результати сортування бульбашкою</h2>`);

  document.write(`
    <p style="font-size: 20px;">
      <b>Початковий масив:</b><br>
      [${numbersList.join(", ")}]
    </p>
  `);

  document.write(`
    <p style="font-size: 20px;">
      <b>Відсортований масив:</b><br>
      [${resultData.sorted.join(", ")}]
    </p>
  `);

  document.write(`
    <p style="font-size: 20px; color: blue;">
      Кількість обмінів: <b>${resultData.swapsCount}</b>
    </p>
  `);
}
