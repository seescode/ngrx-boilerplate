import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';

import { FilterSelect } from './components/filter-select';
import { TodoInput } from './components/todo-input';
import { TodoList } from './components/todo-list';


import { StoreModule } from '@ngrx/store';

import {visibilityFilter, todos} from './store/reducers';

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
    HttpModule,
    StoreModule.provideStore({visibilityFilter, todos})
  ],
  providers: [],
  bootstrap: [TodoApp]
})
export class AppModule { }
