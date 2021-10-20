interface InternalState {
  event: string;
}

// 1. define Observer abstract class
abstract class Observer {
  abstract update(state: InternalState): void;
}

// 2. define Observable abstract class
abstract class Observable {
  observers: Observer[] = [];
  state: InternalState = { event: '' };

  // Register all observers to notify on event
  addObserver(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((o) => o.update(this.state));
  }
}

// 3. Observer Implementation
class ConsoleLogger extends Observer {
  update(state: InternalState): void {
    console.log('New state provided to Console Logger class :', state);
  }
}

// 4. Observalble implementation
class MyInputElement extends Observable {
  click() {
    this.state = { event: 'click' };
    this.notify();
  }
}

// 5. create observers
const myObserver = new ConsoleLogger();

// 6. create observable
const myObservable = new MyInputElement();

// 7. subscribe to the observable
myObservable.addObserver(myObserver);
myObservable.click();
