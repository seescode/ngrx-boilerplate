import {Todo} from "../common/interfaces";
import { observable, computed } from 'mobx';

export default class Todos {
  @observable todos : Todo[] = [];

  add(todo) {
    this.todos.push(todo);
  }

  remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggle(id) {
    this.todos.forEach(function(todo) {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
    });
  }

  @computed get totalCompleted() {
    return this.todos.filter(n => n.complete).length;
  }
}
