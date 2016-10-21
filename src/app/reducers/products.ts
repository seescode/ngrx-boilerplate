import '@ngrx/core/add/operator/select';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';


export interface IProduct {
    id: number;
    title: string;
    price: number;
    inventory: number;
}

export interface ProductsState {
    entities: { [id: string]: IProduct };
}

const initialState: ProductsState = {
    entities: {
      // "abc": {
      //     id: 1,
      //     inventory: 2,
      //     price: 3,
      //     title: 'food'
      // }
  }
};

export default function (state : ProductsState = initialState, action: Action): ProductsState {

    console.log('products reducer', state, action);

    switch (action.type) {
        case RECEIVED_PRODUCTS:
            return {
                entities: Object.assign({},
                    state.entities,
                    action.payload.reduce((obj, product) => {
                        obj[product.id] = product;
                        return obj;
                    }, {})
                )
            };
        case ADD_TO_CART:
            return {
                entities: Object.assign({}, state.entities, {
                    [action.payload]: Object.assign({}, state.entities[action.payload], {
                        inventory: state.entities[action.payload].inventory - 1
                    })
                })
            };
        default:
            return state;
    }
};
