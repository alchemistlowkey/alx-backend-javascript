import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [Symbol.for('clone')]() {
    const clonedCar = new Car();

    const privateProperties = Object.getOwnPropertyDescriptors(this);
    const privateSymbols = Object.getOwnPropertySymbols(privateProperties);

    privateSymbols.forEach((symbol) => {
      clonedCar[symbol] = privateProperties[symbol].value;
    });

    return clonedCar;
  }

  cloneCar() {
    return this[Symbol.for('clone')]();
  }
}
