import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  listCart: any=[];
  constructor(public productCart: CartService){
    this.listCart = productCart.cart;
    console.log(this.listCart);
  }
}
