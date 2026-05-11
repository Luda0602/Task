"use strict";

// =====================================================
// ЗАДАЧА 3
// Підрахувати кількість обмінів
// під час сортування включеннями.
// =====================================================

{
  // Генерація випадкового числа
  function randomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення масиву
  function createRandomList(size: number, min: number, max: number): number[] {
    const numbersList: number[] = [];

    for (let i = 0; i < size; i++) {
      numbersList.push(randomValue(min, max));
    }

    return numbersList;
  }

  // Тип результату
  type InsertionSortResult = {
    finalArray: number[];
    moves: number;
  };

  // Сортування включеннями
  function insertionSorting(data: number[]): InsertionSortResult {
    const copiedList: number[] = data.slice();

    let movesCounter: number = 0;

    for (let step = 1; step < copiedList.length; step++) {
      let selectedNumber: number = copiedList[step];

      let previousIndex: number = step - 1;

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
  const startArray: number[] = createRandomList(30, 1, 100);

  // Виконання сортування
  const sortResult: InsertionSortResult = insertionSorting(startArray);

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
