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
  function showArrayStep(arrayData: number[], markedIndex: number): void {
    document.write(`
      <div style="
        display:flex;
        align-items:center;
        margin-bottom:8px;
        font-size:20px;
        font-family:monospace;
      ">
    `);

    document.write(`<span>[</span>`);

    for (let i = 0; i < arrayData.length; i++) {
      let currentStyle: string = `
        width:35px;
        height:35px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:0 3px;
        border:2px solid transparent;
      `;

      if (i === markedIndex) {
        currentStyle = `
          width:35px;
          height:35px;
          display:flex;
          align-items:center;
          justify-content:center;
          margin:0 3px;
          border:2px dashed red;
          background:#ffeaea;
        `;
      }

      document.write(`
        <div style="${currentStyle}">
          ${arrayData[i]}
        </div>
      `);

      if (i < arrayData.length - 1) {
        document.write(`<span>,</span>`);
      }
    }

    document.write(`<span>]</span>`);
    document.write(`</div>`);

    document.write(`
      <div style="
        color:blue;
        margin-left:40px;
        margin-bottom:10px;
        font-size:22px;
      ">
        ↓
      </div>
    `);
  }

  // Сортування бульбашкою
  function bubbleSortSteps(numbers: number[]): void {
    const copiedNumbers: number[] = [...numbers];

    document.write(`<h3>Сортування бульбашкою</h3>`);

    for (let outer = 0; outer < copiedNumbers.length - 1; outer++) {
      for (let inner = 0; inner < copiedNumbers.length - 1 - outer; inner++) {
        if (copiedNumbers[inner] > copiedNumbers[inner + 1]) {
          let saveValue: number = copiedNumbers[inner];

          copiedNumbers[inner] = copiedNumbers[inner + 1];

          copiedNumbers[inner + 1] = saveValue;

          showArrayStep(copiedNumbers, inner + 1);
        }
      }
    }
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
