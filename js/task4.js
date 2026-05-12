"use strict";

// =====================================================
// ЗАДАЧА 4
// Після кожного обміну виводити
// поточний стан масиву.
// =====================================================

{
  // Створення випадкового числа
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення масиву
  function createArray(size, min, max) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
      resultArray.push(randomNum(min, max));
    }

    return resultArray;
  }

  // Виведення одного етапу
  function showArrayStep(arrayData, stepNumber) {
    document.write(`
      <p style="font-size:20px;">
        Обмін ${stepNumber}: [${arrayData.join(", ")}]
      </p>
    `);
  }

  // Сортування бульбашкою
  function bubbleSortSteps(numbers) {
    const copiedNumbers = numbers.slice();

    let stepCounter = 0;

    document.write(`<h3>Сортування бульбашкою</h3>`);

    for (let outer = 0; outer < copiedNumbers.length - 1; outer++) {
      for (let inner = 0; inner < copiedNumbers.length - 1 - outer; inner++) {
        if (copiedNumbers[inner] > copiedNumbers[inner + 1]) {
          const saveValue = copiedNumbers[inner];

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
  const startNumbers = createArray(5, 1, 50);

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
