import { State } from '../application/state'

export class StateManager {
  constructor() {
    if(!StateManager.instance){
      this.observers = [];
      this.state = new State()
      StateManager.instance = this;
   }

   return StateManager.instance;
  }

  register(observer) {
    this.observers.push(observer);
  }

  unregister(observer) {
    const removeIndex = this.observers.findIndex(obs => {
      return observer === obs;
    });

    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  patch(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notifyAll(this.state);
  }

  notifyAll(data) {
    console.log(data)
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.notify(data));
    }
  }
}
