import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';

import { FilterSelect } from './components/filter-select';
import { TodoInput } from './components/todo-input';
import { TodoList } from './components/todo-list';


import { StoreModule } from '@ngrx/store';

import Todos from './store/todos';
import VisibilityFilter from './store/visibility-filter';

@NgModule({
  declarations: [
    TodoApp,
    FilterSelect,
    TodoInput,
    TodoList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Todos, VisibilityFilter],
  bootstrap: [TodoApp]
})
export class AppModule { }
