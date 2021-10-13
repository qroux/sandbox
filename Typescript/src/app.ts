class Cat {}
class Fish {}

type AnimalOptions = { swim: any } | { jump: any };
type AnimalOutput<T> = T extends { swim: any } ? Fish : Cat;

const generator = <T extends AnimalOptions>(options: T): AnimalOutput<T> => {
  if ('swim' in options) {
    return new Fish();
  } else {
    return new Cat();
  }
};

const a = generator({ jump: () => console.log('Fish') });
