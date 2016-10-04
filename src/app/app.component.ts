import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, Todo, TodoModel} from "./common/interfaces";
import {Observable} from "rxjs/Observable";
import "rxjs";
import Todos from "./store/todos";
import VisibilityFilter from "./store/visibility-filter";
import { autorun } from "mobx";

@Component({
	selector: `todo-app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #2 - Todos</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<todo-input
				(addTodo)="addTodo($event)">
			</todo-input>
			<filter-select
				(filterSelect)="updateFilter($event)">
			</filter-select>
			<todo-list
				[todosModel]="todosModel"
				(removeTodo)="removeTodo($event)"
				(toggleTodo)="toggleTodo($event)">
			</todo-list>
		</div>
	</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoApp {
	//faking an id for demo purposes
	private id: number = 0;
	private todosModel;

	constructor(
		private _todos: Todos,
    private _visibilityFilter: VisibilityFilter
	){

	}

  ngOnInit() {

    //TODO refactor to use reaction()
    autorun((function() {
      this.todosModel = {
        totalTodos: this._todos.todos.length,
        completedTodos: this._todos.totalCompleted,
        filteredTodos: this._todos.todos.filter(this._visibilityFilter.filterFunction)
      };
    }).bind(this));
  }

	addTodo(description : string){
    this._todos.add({
			id: ++this.id,
			description,
			complete: false
		});
	}

	removeTodo(id : number){
		this._todos.remove(id);
	}

	toggleTodo(id : number){
    this._todos.toggle(id);
	}

	updateFilter(filter){
    console.log(filter);
    this._visibilityFilter.set(filter);
	}
}
