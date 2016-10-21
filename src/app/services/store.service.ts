import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHECKOUT_REQUEST } from '../reducers/cart';
import { ADD_TO_CART, REQUEST_PRODUCTS, IProduct } from '../reducers/products';
import { AppState } from '../reducers/index';


@Injectable()
export class StoreService {

  constructor(private store: Store<AppState>) { }

  getProducts() {
    this.store.dispatch({
      type: REQUEST_PRODUCTS
    });
  }

  addToCart(product: IProduct) {
    this.store.dispatch({
      type: ADD_TO_CART,
      payload: product.id
    });
  }

  checkout(products: [number]) {
    this.store.dispatch({
        type: CHECKOUT_REQUEST,
        payload: products
      });
  }
}
