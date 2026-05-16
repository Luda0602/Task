"use strict";

// =====================================================
// Дано масив 30 випадкових цілих чисел.
// Підрахувати кількість обмінів під час сортування бульбашкою
// =====================================================

{
  // випадкове число
  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // створення масиву
  function createList(size, min, max) {
    const list = [];

    for (let i = 0; i < size; i++) {
      list.push(randomValue(min, max));
    }

    return list;
  }

  // сортування бульбашкою
  function bubbleSortStats(inputList) {
    let swapCounter = 0;

    const workList = inputList.slice();
    const length = workList.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (workList[j] > workList[j + 1]) {
          let tempValue = workList[j];
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
  const numbersList = createList(30, 1, 100);

  // результат сортування
  const resultData = bubbleSortStats(numbersList);

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
