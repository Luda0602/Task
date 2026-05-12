"use strict";

// =====================================================
// ЗАДАЧА 7
// Сформувати двовимірний масив 4*8 з номерами днів.
// Описати окремий тип для днів.
// Заповнити випадковим чином.
// Підрахувати для кожного рядка кількість неділь.
// =====================================================

{
  document.write("<h1>Task 7</h1>");

  // Окремий об'єкт для днів тижня
  const Days = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7,
  };

  // Випадкове число
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення одного рядка
  function createRandomRow(columnCount) {
    const row = [];

    for (let col = 0; col < columnCount; col++) {
      row.push(getRandomNumber(Days.MONDAY, Days.SUNDAY));
    }

    return row;
  }

  // Створення двовимірного масиву
  function createDaysMatrix(rowCount, columnCount) {
    const matrix = [];

    for (let row = 0; row < rowCount; row++) {
      matrix.push(createRandomRow(columnCount));
    }

    return matrix;
  }

  // Підрахунок кількості неділь в одному рядку
  function getSundayCount(row) {
    let counter = 0;

    for (let i = 0; i < row.length; i++) {
      if (row[i] === Days.SUNDAY) {
        counter++;
      }
    }

    return counter;
  }

  const daysMatrix = createDaysMatrix(4, 8);

  document.write(`<h2>Масив днів:</h2>`);

  for (let row = 0; row < daysMatrix.length; row++) {
    const sundayCount = getSundayCount(daysMatrix[row]);

    document.write(`
      <p style="font-size:20px;">
        Рядок №${row + 1}:
        [${daysMatrix[row].join(", ")}]
        —
        неділь: <b>${sundayCount}</b>
      </p>
    `);
  }
}
