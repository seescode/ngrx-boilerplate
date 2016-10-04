import { observable, computed } from 'mobx';

export const SHOW_COMPLETED = 0;
export const SHOW_ACTIVE = 1;
export const SHOW_ALL = 2;

export default class VisibilityFilter {
  @observable current = SHOW_ALL;


  set(val) {
    this.current = val;
  }

  @computed get filterFunction() {
    switch (parseInt(this.current)) {
      case SHOW_COMPLETED:
        return todo => todo.complete;

      case SHOW_ACTIVE:
        return todo => !todo.complete;

      case SHOW_ALL:
      default:
        return todo => todo;
    }
  }
}
