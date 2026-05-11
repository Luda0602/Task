"use strict";

// =====================================================
// ЗАДАЧА 6
// Масив імен.
// Знайти ім’я довжиною 5 символів
// за допомогою сортування і бінарного пошуку.
// =====================================================

{
  // Початковий масив
  const peopleNames: string[] = [
    "Ivan",
    "Olga",
    "Petro",
    "Roman",
    "Sofia",
    "Marta",
    "Oleg",
    "Taras",
  ];

  // Потрібна довжина
  const neededLength: number = 5;

  // Сортування за довжиною
  function sortByNameLength(list: string[]): void {
    for (let step = 1; step < list.length; step++) {
      let currentItem: string = list[step];

      let previousPos: number = step - 1;

      while (
        previousPos >= 0 &&
        list[previousPos].length > currentItem.length
      ) {
        list[previousPos + 1] = list[previousPos];

        previousPos--;
      }

      list[previousPos + 1] = currentItem;
    }
  }

  // Бінарний пошук
  function searchByLength(list: string[], valueLength: number): number {
    let leftSide: number = 0;

    let rightSide: number = list.length - 1;

    while (leftSide <= rightSide) {
      let centerIndex: number = Math.floor((leftSide + rightSide) / 2);

      if (list[centerIndex].length === valueLength) {
        return centerIndex;
      }

      if (list[centerIndex].length < valueLength) {
        leftSide = centerIndex + 1;
      } else {
        rightSide = centerIndex - 1;
      }
    }

    return -1;
  }

  // Виведення початкового масиву
  document.write(`
    <p style="font-size:20px;">
      <b>Початковий масив:</b><br>
      [${peopleNames.join(", ")}]
    </p>
  `);

  // Сортування
  sortByNameLength(peopleNames);

  // Виведення відсортованого масиву
  document.write(`
    <p style="font-size:20px;">
      <b>Відсортований масив:</b><br>
      [${peopleNames.join(", ")}]
    </p>
  `);

  // Пошук
  const foundPosition: number = searchByLength(peopleNames, neededLength);

  // Результат
  if (foundPosition !== -1) {
    document.write(`
      <p style="font-size:20px; color:green;">
        Ім’я довжиною
        <b>${neededLength}</b>
        символів знайдено:
        <b>${peopleNames[foundPosition]}</b>.
      </p>
    `);

    document.write(`
      <p style="font-size:20px;">
        Індекс:
        <b>${foundPosition}</b>
      </p>
    `);
  } else {
    document.write(`
      <p style="font-size:20px; color:red;">
        Ім’я довжиною
        <b>${neededLength}</b>
        символів не знайдено.
      </p>
    `);
  }
}
