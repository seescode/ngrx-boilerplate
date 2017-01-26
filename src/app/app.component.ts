import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$ : Observable<string[]>;

  constructor(private store:Store<string[]>){
    this.todos$ = this.store.select<string[]>('todos')
  }

  addTodo(todo: string) {
    console.log('todo added')
    this.store.dispatch({ type:'ADD', payload:todo});
  }
}
