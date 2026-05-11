"use strict";

// =====================================================
// ЗАДАЧА 7
// Двовимірний масив 4*8
// з номерами днів.
// Порахувати кількість неділь
// у кожному рядку.
// =====================================================

{
  // Номери днів тижня
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

  // Кількість рядків і стовпців
  const rowCount = 4;
  const columnCount = 8;

  // Випадковий день
  function randomDayName() {
    const randomPosition = Math.floor(Math.random() * weekDays.length);

    return weekDays[randomPosition];
  }

  // Створення двовимірного масиву
  function createDayTable(rows, cols) {
    const daysTable = [];

    for (let row = 0; row < rows; row++) {
      const currentLine = [];

      for (let col = 0; col < cols; col++) {
        currentLine.push(randomDayName());
      }

      daysTable.push(currentLine);
    }

    return daysTable;
  }

  // Підрахунок неділь
  function countSundays(table) {
    document.write(`
            <h2>
                Двовимірний масив днів тижня
            </h2>
        `);

    for (let row = 0; row < table.length; row++) {
      let sundayCounter = 0;

      for (let col = 0; col < table[row].length; col++) {
        if (table[row][col] === "Нд") {
          sundayCounter++;
        }
      }

      document.write(`
                <p style="font-size:20px;">
                    Рядок ${row + 1}:
                    [ ${table[row].join(" , ")} ]
                    —
                    <b>
                        Неділь:
                        ${sundayCounter}
                    </b>
                </p>
            `);
    }
  }

  // Створення масиву
  const resultMatrix = createDayTable(rowCount, columnCount);

  // Виведення результату
  countSundays(resultMatrix);
}
