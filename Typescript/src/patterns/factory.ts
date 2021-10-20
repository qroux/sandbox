//////////////////////
// FACTORY PATTERN //
/////////////////////

// 1. define shape of all child class
interface Vehicule {
  move(): void;
}

class Car implements Vehicule {
  move() {
    return console.log('The car is moving');
  }
}

class Plane implements Vehicule {
  move() {
    return console.log('The plane is flying');
  }
}

// 2. define abstract class for generic methods
abstract class VehiculeHandler {
  // abstract + method => leave implementation of the actual behavior to the subclass
  abstract createVehicule(): Vehicule;

  // define generic methods usable by all sub classes
  moveVehicule() {
    // instantiate
    const myVehicule = this.createVehicule();

    // call instance methode 'move'
    myVehicule.move();
  }
}

// 3. create actual implementation of generic Handler
class CarHandler extends VehiculeHandler {
  createVehicule(): Vehicule {
    return new Car();
  }
}

class PlaneHandler extends VehiculeHandler {
  createVehicule(): Vehicule {
    return new Plane();
  }
}

// 4. Use the specific handler to instantiate + use instead of specific class constructor directly
const car = new CarHandler();
const plane = new PlaneHandler();
car.moveVehicule();
plane.moveVehicule();
