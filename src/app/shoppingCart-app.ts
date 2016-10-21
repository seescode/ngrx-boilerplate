import {Component, ChangeDetectionStrategy} from '@angular/core';

import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';

import {getProductsAsArry, getCalculatedCartList} from './reducers';
import { StoreService}from './services/store.service';


@Component({
    selector: `shopping-cart-app`,
    template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Example #5 - Shopping Cart</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<product-list
				[products]="(products | async)"
                (addToCart)="addToCart($event)">
			</product-list>
            <cart-list
				[cartList]="(cartList | async)"
                (checkout)="checkout($event)">
			</cart-list>
		</div>
	</div>
	`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartApp {
    cartList: any;
    products: any;

    constructor(public store: Store<any>, public storeService: StoreService) {

        // console.log("dispatching");
        // store.dispatch(getProducts());

        this.products = store.let(getProductsAsArry());
        this.cartList = store.let(getCalculatedCartList());

        storeService.getProducts();
    }

    addToCart(product) {
      this.storeService.addToCart(product);
    }

    checkout(stuff) {
      console.log('is this actually used', stuff);
      this.storeService.checkout(stuff);
    }
}
