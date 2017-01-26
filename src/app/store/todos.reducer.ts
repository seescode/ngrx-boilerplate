import {ActionReducer, Action} from "@ngrx/store";

export const todos: ActionReducer<string[]> = (state: string[] = [], action: Action) => {
    switch(action.type){
        case 'ADD':
          return [...state, action.payload];
        case 'REMOVE':
          return state.filter((todo) => todo != action.payload);
        default:
          return state;
    }
};
