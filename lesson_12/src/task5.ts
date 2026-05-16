"use strict";

// =====================================================
// ЗАДАЧА 5
// Масив імен.
// Відсортувати та бінарним пошуком
// знайти ім’я "Olga".
// =====================================================

{
  // Початковий масив
  const usersList: string[] = [
    "Ivan",
    "Olga",
    "Petro",
    "Anna",
    "Sofia",
    "Maksym",
    "Andrii",
  ];

  // Ім’я для пошуку
  const searchName: string = "Olga";

  // Сортування включеннями
  function sortNames(list: string[]): void {
    for (let step = 1; step < list.length; step++) {
      let currentName: string = list[step];

      let checkIndex: number = step - 1;

      while (checkIndex >= 0 && list[checkIndex] > currentName) {
        list[checkIndex + 1] = list[checkIndex];

        checkIndex--;
      }

      list[checkIndex + 1] = currentName;
    }
  }

  // Бінарний пошук
  function binarySearch(list: string[], value: string): number {
    let leftBorder: number = 0;

    let rightBorder: number = list.length - 1;

    while (leftBorder <= rightBorder) {
      let middleIndex: number = Math.floor((leftBorder + rightBorder) / 2);

      if (list[middleIndex] === value) {
        return middleIndex;
      }

      if (list[middleIndex] < value) {
        leftBorder = middleIndex + 1;
      } else {
        rightBorder = middleIndex - 1;
      }
    }

    return -1;
  }

  // Виведення початкового масиву
  document.write(`
    <p style="font-size:20px;">
      <b>Початковий масив:</b><br>
      [${usersList.join(", ")}]
    </p>
  `);

  // Сортування
  sortNames(usersList);

  // Виведення відсортованого масиву
  document.write(`
    <p style="font-size:20px;">
      <b>Відсортований масив:</b><br>
      [${usersList.join(", ")}]
    </p>
  `);

  // Пошук імені
  const resultIndex: number = binarySearch(usersList, searchName);

  // Результат
  if (resultIndex !== -1) {
    document.write(`
      <p style="font-size:20px; color:green;">
        Ім’я <b>${searchName}</b>
        знайдено під індексом
        <b>${resultIndex}</b>.
      </p>
    `);
  } else {
    document.write(`
      <p style="font-size:20px; color:red;">
        Ім’я <b>${searchName}</b>
        не знайдено.
      </p>
    `);
  }
}
