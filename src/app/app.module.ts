import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AsyncApp } from './async-app';

import {RedditModel} from "./services/reddit-model";
import {Reddit} from "./services/reddit";
import {RedditSelect} from "./components/reddit-select";
import {RedditList} from "./components/reddit-list";
import {RefreshButton} from "./components/refresh-button";

import {selectedReddit, postsByReddit} from "./store/reddit";
import {RedditEffects} from "./store/reddit-effects";




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
    StoreModule.provideStore({selectedReddit, postsByReddit}),
    /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(RedditEffects),
  ],
  providers: [RedditModel, Reddit],
  bootstrap: [AsyncApp]
})
export class AppModule { }
