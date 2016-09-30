import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Reddit} from "../services/reddit";
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_REDDIT
} from "./reddit";

@Injectable()
export class RedditEffects {
  constructor(
    private _actions$: Actions,
    private _reddit: Reddit
  ) { }

  @Effect() requestPosts$ = this._actions$
    .ofType(SELECT_REDDIT)
    .map((action) => ({ type: REQUEST_POSTS, payload: { reddit: action.payload } }));

  @Effect() fetchPosts$ = this._actions$
    .ofType(REQUEST_POSTS)
    .switchMap((action) => (
      this._reddit
        .fetchPosts(action.payload.reddit)
        .map(({data}) => ({ type: RECEIVE_POSTS, payload: { reddit: action.payload.reddit, data } })
        )));


}
