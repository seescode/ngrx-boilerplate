import {Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from '@angular/core';
import {IProduct} from '../reducers/products';

@Component({
    selector: 'product-item',
    template: `
    <li class="margin-t-20">
        <div>{{product.title}} - {{product.price}}</div>
        <div>{{product.inventory}} left</div>
        <button class="pure-button pure-button-primary"
            (click)="add(product)"
        </button>
    </li>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
    @Input() product: IProduct;
    @Output() addToCart: EventEmitter<IProduct>
      = new EventEmitter<IProduct>();

    add(product: IProduct) {
      product.inventory = product.inventory - 1;
      this.addToCart.emit(product);
    }
}
