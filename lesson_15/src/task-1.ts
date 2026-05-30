"use strict";

/*
Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Тир
-----------------------------------------
Поля(властивості)
Масив, у якому зберігається поле з зайцями
 ----------------------------------------
Методи (дії)
Метод пострілу (задається позиція пострілу)
Виведення ігрового поля
*/

const row: number = 3;
const column: number = 3;
const rabbit: number = 3;

const initField: number[][] = Array.from({ length: row }, () =>
  Array<number>(column).fill(0),
);

class ShootingGallery {
  row: number;
  column: number;
  field: number[][];
  rabbits: number;

  constructor(row: number, column: number, field: number[][], rabbits: number) {
    this.row = row;
    this.column = column;
    this.field = field;
    this.rabbits = rabbits;
  }

  requiredField(): number[][] {
    let count: number = 0;

    while (count < this.rabbits) {
      const randomRow: number = Math.floor(Math.random() * this.row);
      const randomColumn: number = Math.floor(Math.random() * this.column);

      if (this.field[randomRow][randomColumn] === 0) {
        this.field[randomRow][randomColumn] = 1;
        count++;
      }
    }

    return this.field;
  }

  shooting(): boolean {
    const rowNumber: string | null = prompt("Введіть номер рядка (1-3)", "1");
    const columnNumber: string | null = prompt(
      "Введіть номер колонки (1-3)",
      "1",
    );

    if (rowNumber === null || columnNumber === null) {
      alert("Ви завершили гру");
      return false;
    }

    const shootingRow: number = parseInt(rowNumber) - 1;
    const shootingColumn: number = parseInt(columnNumber) - 1;

    if (
      shootingColumn < 0 ||
      shootingRow < 0 ||
      shootingColumn >= this.column ||
      shootingRow >= this.row
    ) {
      throw new Error("Некоректні дані");
    }

    if (this.field[shootingRow][shootingColumn] === 1) {
      alert("Вітання, влучання у зайця");
      this.field[shootingRow][shootingColumn] = 5;
      this.rabbits--;
    } else if (this.field[shootingRow][shootingColumn] === 5) {
      alert("Вже був постріл тут");
    } else {
      alert("Промах, стріляй ще раз");
    }

    return this.rabbits > 0;
  }

  drawTable(): void {
    document.body.innerHTML = "";

    const gameTitle: HTMLHeadingElement = document.createElement("h2");
    gameTitle.innerText = "Гра 'Тир'";
    gameTitle.style.textAlign = "center";

    const gameTable: HTMLTableElement = document.createElement("table");
    gameTable.style.margin = "0 auto";
    gameTable.style.borderCollapse = "collapse";

    for (let rowIndex: number = 0; rowIndex < this.row; rowIndex++) {
      const tableRow: HTMLTableRowElement = document.createElement("tr");

      for (let colIndex: number = 0; colIndex < this.column; colIndex++) {
        const tableCell: HTMLTableCellElement = document.createElement("td");

        tableCell.innerHTML = this.field[rowIndex][colIndex].toString();

        tableCell.style.border = "1px solid black";
        tableCell.style.width = "50px";
        tableCell.style.height = "50px";
        tableCell.style.textAlign = "center";
        tableCell.style.fontSize = "20px";
        tableCell.style.backgroundColor = "#f2f2f2";

        tableRow.append(tableCell);
      }

      gameTable.append(tableRow);
    }

    document.body.append(gameTitle);
    document.body.append(gameTable);
  }
}

const generate: ShootingGallery = new ShootingGallery(
  row,
  column,
  initField,
  rabbit,
);

const printField: number[][] = generate.requiredField();
console.log(printField);

let game: boolean = true;

generate.drawTable();

while (game) {
  game = generate.shooting();
  generate.drawTable();

  if (generate.rabbits === 0) {
    alert("Ви перемогли");
  }
}
