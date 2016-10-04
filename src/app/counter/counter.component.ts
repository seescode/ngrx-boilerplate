//Source: https://github.com/btroncone/ngrx-examples

import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import { autorun } from 'mobx';
import { State } from '../store/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  //Unless a reference changes, ignore change detection on this component.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  counter = 0;

  constructor(
    private state: State
  ) {
    autorun(() => {
      this.counter = this.state.count;
    })
  }
  /*
      The only way to modify state in store is through dispatched actions.
      Actions require a type (string) and optional payload.
      This type will match up to a case in one of your application reducers,
      specifying how this action will create a new representation
      of that particular section of state.
   */
  increment() {
    this.state.add();
  }

  decrement() {
    this.state.remove();
  }

  incrementAsync() {
    setTimeout(() => {
      this.state.add();
    }, 1000);
  }

  decrementAsync() {
    setTimeout(() => {
      this.state.remove();
    }, 1000);
  }
}
