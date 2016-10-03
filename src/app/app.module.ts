import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



import {ProductList} from './components/product-list';
import {CartList} from './components/cart-list';
import {ProductItem} from './components/product-item';
import {CartItem} from './components/cart-item';

import {ShoppingCartApp} from './shoppingCart-app';


import {getProductsAsArry, getCalculatedCartList} from './reducers';

import { ShopEffects } from './effects/shop';


@NgModule({
  declarations: [
    ProductList,
    CartList,
    ShoppingCartApp,
    ProductItem,
    CartItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({getProductsAsArry, getCalculatedCartList}),
    /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(ShopEffects),
  ],
  //providers: [RedditModel, Reddit],
  bootstrap: [ShoppingCartApp]
})
export class AppModule { }
