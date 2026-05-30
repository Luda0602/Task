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
  checkedNumber;
  correctCount;
  wrongCount;
  secondMultiplier;

  constructor(checkedNumber) {
    this.checkedNumber = checkedNumber;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.secondMultiplier = 0;
  }

  generateExample(minValue, maxValue) {
    this.secondMultiplier = Math.floor(
      minValue + Math.random() * (maxValue - minValue + 1),
    );
  }

  checkAnswer() {
    const correctAnswer = this.checkedNumber * this.secondMultiplier;

    const userAnswer = parseInt(
      prompt(`${this.checkedNumber} * ${this.secondMultiplier} = ?`, ""),
    );

    if (userAnswer === correctAnswer) {
      this.correctCount++;
    } else {
      this.wrongCount++;
    }
  }

  render() {
    return `Кількість правильних відповідей = ${this.correctCount}, неправильних = ${this.wrongCount}`;
  }
}

const minMultiplier = 1;
const maxMultiplier = 9;
const checkedNumber = 7;
const questionsCount = 8;

const multiplicationTest = new MultiChecker(checkedNumber);

for (let questionIndex = 0; questionIndex < questionsCount; questionIndex++) {
  multiplicationTest.generateExample(minMultiplier, maxMultiplier);
  multiplicationTest.checkAnswer();
}

document.write(multiplicationTest.render());
