"use strict";

// =====================================================
// ЗАДАЧА 3
// Підрахувати кількість обмінів
// під час сортування включеннями.
// =====================================================

{
  // Генерація випадкового числа
  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення масиву
  function createRandomList(size, min, max) {
    const numbersList = [];

    for (let i = 0; i < size; i++) {
      numbersList.push(randomValue(min, max));
    }

    return numbersList;
  }

  // Сортування включеннями
  function insertionSorting(data) {
    const copiedList = data.slice();

    let movesCounter = 0;

    for (let step = 1; step < copiedList.length; step++) {
      let selectedNumber = copiedList[step];
      let previousIndex = step - 1;

      while (previousIndex >= 0 && copiedList[previousIndex] > selectedNumber) {
        copiedList[previousIndex + 1] = copiedList[previousIndex];

        movesCounter++;

        previousIndex--;
      }

      copiedList[previousIndex + 1] = selectedNumber;
    }

    return {
      finalArray: copiedList,
      moves: movesCounter,
    };
  }

  // Генерація початкового масиву
  const startArray = createRandomList(30, 1, 100);

  // Виконання сортування
  const sortResult = insertionSorting(startArray);

  // Виведення результатів
  document.write(`<h2>Сортування включеннями</h2>`);

  document.write(`
        <p style="font-size:20px;">
            <b>Початковий масив:</b><br>
            [${startArray.join(", ")}]
        </p>
    `);

  document.write(`
        <p style="font-size:20px;">
            <b>Відсортований масив:</b><br>
            [${sortResult.finalArray.join(", ")}]
        </p>
    `);

  document.write(`
        <p style="font-size:20px; color:blue;">
            Кількість переміщень:
            <b>${sortResult.moves}</b>
        </p>
    `);
}
