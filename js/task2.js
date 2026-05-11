"use strict";

// =====================================================
// ЗАДАЧА 2
// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів
// під час сортування змішуванням.
// =====================================================

{
  // випадкове число
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // створення масиву
  function createNumbersArray(size, min, max) {
    const numbers = [];

    for (let i = 0; i < size; i++) {
      numbers.push(randomInt(min, max));
    }

    return numbers;
  }

  // сортування змішуванням
  function shakerSort(array) {
    const data = array.slice();

    let swaps = 0;

    let start = 0;
    let end = data.length - 1;

    while (start < end) {
      // зліва направо
      for (let i = start; i < end; i++) {
        if (data[i] > data[i + 1]) {
          let temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;

          swaps++;
        }
      }

      end--;

      // справа наліво
      for (let i = end; i > start; i--) {
        if (data[i] < data[i - 1]) {
          let temp = data[i];
          data[i] = data[i - 1];
          data[i - 1] = temp;

          swaps++;
        }
      }

      start++;
    }

    return {
      sorted: data,
      swapCount: swaps,
    };
  }

  // масив
  const numbers = createNumbersArray(30, 1, 100);

  // результат
  const result = shakerSort(numbers);

  document.write(`<h2>Сортування змішуванням</h2>`);

  document.write(`
    <p style="font-size:20px;">
      <b>Початковий масив:</b><br>
      [${numbers.join(", ")}]
    </p>
  `);

  document.write(`
    <p style="font-size:20px;">
      <b>Відсортований масив:</b><br>
      [${result.sorted.join(", ")}]
    </p>
  `);

  document.write(`
    <p style="font-size:20px; color:green;">
      Кількість обмінів: <b>${result.swapCount}</b>
    </p>
  `);
}
