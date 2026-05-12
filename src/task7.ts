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

  // Окремий тип для днів тижня
  enum Days {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  // Випадкове число
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Створення одного рядка
  function createRandomRow(columnCount: number): Days[] {
    const row: Days[] = [];

    for (let col = 0; col < columnCount; col++) {
      row.push(getRandomNumber(Days.MONDAY, Days.SUNDAY) as Days);
    }

    return row;
  }

  // Створення двовимірного масиву
  function createDaysMatrix(rowCount: number, columnCount: number): Days[][] {
    const matrix: Days[][] = [];

    for (let row = 0; row < rowCount; row++) {
      matrix.push(createRandomRow(columnCount));
    }

    return matrix;
  }

  // Підрахунок кількості неділь в одному рядку
  function getSundayCount(row: Days[]): number {
    let counter: number = 0;

    for (let i = 0; i < row.length; i++) {
      if (row[i] === Days.SUNDAY) {
        counter++;
      }
    }

    return counter;
  }

  const daysMatrix: Days[][] = createDaysMatrix(4, 8);

  document.write(`<h2>Масив днів:</h2>`);

  for (let row = 0; row < daysMatrix.length; row++) {
    const sundayCount: number = getSundayCount(daysMatrix[row]);

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
