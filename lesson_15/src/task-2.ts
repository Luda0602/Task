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

type Car = {
  carBrand: string;
  fuelTankCapacity: number;
  currentFuel: number;
  seatsCount: number;
  passengersCount: number;

  addFuel(liters: number): string;
  showPassengers(): string;
  addPassengers(passengersToAdd: number): string;
  removePassengers(passengersToRemove: number): string;
};

const car: Car = {
  carBrand: "Audi",
  fuelTankCapacity: 58,
  currentFuel: 32,
  seatsCount: 5,
  passengersCount: 3,

  addFuel(liters: number): string {
    if (this.currentFuel + liters > this.fuelTankCapacity) {
      const freeFuelSpace: number = this.fuelTankCapacity - this.currentFuel;
      return `Бак не вмістить ${liters} л пального. Можна заправити лише ${freeFuelSpace} л.`;
    } else {
      this.currentFuel += liters;
      return `Заправлено ${liters} л. Тепер у баку ${this.currentFuel} л.`;
    }
  },

  showPassengers(): string {
    return `Кількість пасажирів: ${this.passengersCount}`;
  },

  addPassengers(passengersToAdd: number): string {
    const freeSeats: number = this.seatsCount - this.passengersCount;

    if (passengersToAdd > freeSeats) {
      return `Недостатньо місць. Можна додати лише ${freeSeats} пасажирів.`;
    } else {
      this.passengersCount += passengersToAdd;
      return `Пасажирів в авто: ${this.passengersCount}`;
    }
  },

  removePassengers(passengersToRemove: number): string {
    if (passengersToRemove > this.passengersCount) {
      throw new Error("Не можна висадити більше пасажирів, ніж є в авто");
    } else {
      this.passengersCount -= passengersToRemove;
      return `Пасажирів залишилось: ${this.passengersCount}`;
    }
  },
};

const fuelAmount: number = 10;
const passengersToAdd: number = 1;
const passengersToRemove: number = 2;

console.log(car.addFuel(fuelAmount));
console.log(car.showPassengers());
console.log(car.addPassengers(passengersToAdd));
console.log(car.removePassengers(passengersToRemove));
