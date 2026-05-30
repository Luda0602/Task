"use strict";

/*
Створити об’єкт «Авто».
Поля(властивості)
Марка
Розмір бака
Кількість наявних літрів
Кількість місць
Кількість пасажирів
Методи (дії)
Заправка на вказану кількість літрів
Виведення кількості пасажирів
Додавання пасажирів
Висадка пасажирів
*/

const car = {
  carBrand: "Audi",
  fuelTankCapacity: 58,
  currentFuel: 32,
  seatsCount: 5,
  passengersCount: 3,

  addFuel(liters) {
    if (this.currentFuel + liters > this.fuelTankCapacity) {
      const freeFuelSpace = this.fuelTankCapacity - this.currentFuel;
      return `Бак не вмістить ${liters} л пального. Можна заправити лише ${freeFuelSpace} л.`;
    } else {
      this.currentFuel += liters;
      return `Заправлено ${liters} л. Тепер у баку ${this.currentFuel} л.`;
    }
  },

  showPassengers() {
    return `Кількість пасажирів: ${this.passengersCount}`;
  },

  addPassengers(passengersToAdd) {
    const freeSeats = this.seatsCount - this.passengersCount;

    if (passengersToAdd > freeSeats) {
      return `Недостатньо місць. Можна додати лише ${freeSeats} пасажирів.`;
    } else {
      this.passengersCount += passengersToAdd;
      return `Пасажирів в авто: ${this.passengersCount}`;
    }
  },

  removePassengers(passengersToRemove) {
    if (passengersToRemove > this.passengersCount) {
      throw new Error("Не можна висадити більше пасажирів, ніж є в авто");
    } else {
      this.passengersCount -= passengersToRemove;
      return `Пасажирів залишилось: ${this.passengersCount}`;
    }
  },
};

const fuelAmount = 10;
const passengersToAdd = 1;
const passengersToRemove = 2;

console.log(car.addFuel(fuelAmount));
console.log(car.showPassengers());
console.log(car.addPassengers(passengersToAdd));
console.log(car.removePassengers(passengersToRemove));
