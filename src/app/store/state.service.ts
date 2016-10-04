import { observable, computed } from 'mobx';


export class State {
  @observable counter = 0;

  @computed get count() {
    return this.counter;
  }

  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }

}
