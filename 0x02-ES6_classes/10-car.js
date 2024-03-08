const clonedSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [clonedSymbol]() {
    const clonedCar = new this.constructor();

    const privateProperties = Object.getOwnPropertyDescriptors(this);
    const privateSymbols = Object.getOwnPropertySymbols(privateProperties);

    privateSymbols.forEach((symbol) => {
      clonedCar[symbol] = privateProperties[symbol].value;
    });

    return clonedCar;
  }

  cloneCar() {
    return this[clonedSymbol]();
  }
}

export default Car;
