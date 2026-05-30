"use strict";

/*
Розробити клас MultiChecker для перевірки таблиці множення
-----------------------------------
Поля
Число, яке перевіряємо
Кількість правильних відповідей
Кількість неправильних відповідей
--------------------------------------
Методи
Генерування прикладу
Перевірка правильності вказаної відповіді
render - виведення інформації про тестування на екран
*/

class MultiChecker {
  checkedNumber: number;
  correctCount: number;
  wrongCount: number;
  secondMultiplier: number;

  constructor(checkedNumber: number) {
    this.checkedNumber = checkedNumber;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.secondMultiplier = 0;
  }

  generateExample(minValue: number, maxValue: number): void {
    this.secondMultiplier = Math.floor(
      minValue + Math.random() * (maxValue - minValue + 1),
    );
  }

  checkAnswer(): void {
    const correctAnswer: number = this.checkedNumber * this.secondMultiplier;

    const userAnswer: number = parseInt(
      prompt(`${this.checkedNumber} * ${this.secondMultiplier} = ?`, "") || "0",
    );

    if (userAnswer === correctAnswer) {
      this.correctCount++;
    } else {
      this.wrongCount++;
    }
  }

  render(): string {
    return `Кількість правильних відповідей = ${this.correctCount}, неправильних = ${this.wrongCount}`;
  }
}

const minMultiplier: number = 1;
const maxMultiplier: number = 9;
const checkedNumber: number = 7;
const questionsCount: number = 8;

const multiplicationTest = new MultiChecker(checkedNumber);

for (let questionIndex = 0; questionIndex < questionsCount; questionIndex++) {
  multiplicationTest.generateExample(minMultiplier, maxMultiplier);
  multiplicationTest.checkAnswer();
}

document.write(multiplicationTest.render());
