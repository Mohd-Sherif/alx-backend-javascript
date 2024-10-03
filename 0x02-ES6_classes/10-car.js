const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of the class
    const clone = new this.constructor();
    // Copy the properties to the new instance
    clone[cloneSymbol] = { ...this }; // Cloning the properties
    return clone;
  }
}
