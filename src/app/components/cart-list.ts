import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {CartItem} from './cart-item';

@Component({
    selector: 'cart-list',
    template: `
        <ul *ngIf="cartList">
            <cart-item *ngFor="let cartItem of cartList"
                [cartItem]="cartItem">
            </cart-item>
        </ul>
        <button class="pure-button pure-button-primary"
            (click)="checkout())"> Checkout</button>
    `
})
export class CartList {
    @Input() cartList: any;

    constructor(private checkoutService: CheckoutService) {
      checkout() {
        this.checkoutService.dingDangDo();
      }
    }
}
