abstract class Animal {
  abstract move(): void;
}

abstract class AnimalDecorator extends Animal {
  protected subject: Animal;

  constructor(subjectToDecorate: Animal) {
    super();
    this.subject = subjectToDecorate;
  }

  abstract move(): void;
}

class Dog extends Animal {
  move() {
    console.log('Original Walking');
  }
}

class DecoratedDog extends AnimalDecorator {
  move() {
    console.log('super fly');
    this.subject.move();
    console.log('super fly');
  }
}

const dog = new Dog();
dog.move();

const superDog = new DecoratedDog(dog);
superDog.move();
