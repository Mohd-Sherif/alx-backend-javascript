import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }

  get range() {
    return this._range;
  }
}
