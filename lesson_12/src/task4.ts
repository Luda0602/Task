"use strict";

// =====================================================
// ЗАДАЧА 4
// Після кожного обміну виводити
// поточний стан масиву.
// =====================================================

{
  // Створення випадкового числа
  function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення масиву
  function createArray(size: number, min: number, max: number): number[] {
    const resultArray: number[] = [];

    for (let i = 0; i < size; i++) {
      resultArray.push(randomNum(min, max));
    }

    return resultArray;
  }

  // Виведення одного етапу
  function showArrayStep(arrayData: number[], stepNumber: number): void {
    document.write(`
      <p style="font-size:20px;">
        Обмін ${stepNumber}: [${arrayData.join(", ")}]
      </p>
    `);
  }

  // Сортування бульбашкою
  function bubbleSortSteps(numbers: number[]): void {
    const copiedNumbers: number[] = numbers.slice();

    let stepCounter: number = 0;

    document.write(`<h3>Сортування бульбашкою</h3>`);

    for (let outer = 0; outer < copiedNumbers.length - 1; outer++) {
      for (let inner = 0; inner < copiedNumbers.length - 1 - outer; inner++) {
        if (copiedNumbers[inner] > copiedNumbers[inner + 1]) {
          const saveValue: number = copiedNumbers[inner];

          copiedNumbers[inner] = copiedNumbers[inner + 1];
          copiedNumbers[inner + 1] = saveValue;

          stepCounter++;

          showArrayStep(copiedNumbers, stepCounter);
        }
      }
    }

    document.write(`
      <p style="font-size:20px; color:green;">
        <b>Відсортований масив:</b><br>
        [${copiedNumbers.join(", ")}]
      </p>
    `);
  }

  // Початковий масив
  const startNumbers: number[] = createArray(5, 1, 50);

  document.write(`
    <p style="font-size:20px;">
      <b>Початковий масив:</b><br>
      [${startNumbers.join(", ")}]
    </p>
  `);

  document.write(`<hr>`);

  // Запуск сортування
  bubbleSortSteps(startNumbers);
}
