import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AsyncApp } from './async-app';

import {RedditModel} from "./services/reddit-model";
import {RedditSelect} from "./components/reddit-select";
import {RedditList} from "./components/reddit-list";
import {RefreshButton} from "./components/refresh-button";

import {selectedReddit, postsByReddit} from "./store/reddit";


@NgModule({
  declarations: [
    RedditList,
    RedditSelect,
    RefreshButton,
    AsyncApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({selectedReddit, postsByReddit})
  ],
  providers: [RedditModel],
  bootstrap: [AsyncApp]
})
export class AppModule { }
