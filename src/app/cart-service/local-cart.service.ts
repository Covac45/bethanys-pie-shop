import { Injectable } from '@angular/core';
import { IProduct } from '../product-page/product-details/product-model';
import { ICartInterface } from './icart-interface';
import { ICart } from './cart-model';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService implements ICartInterface {

  public cart: ICart = {
    products: [],
    productQty: []
  };

  constructor() { }

  saveCart():void {
    localStorage.setItem('cart_items', JSON.stringify(this.cart));
  }

  AddProductToCart(product: IProduct): void
  {
    var index = this.FindProductInCart(product);

    if(index > -1){
      this.cart.productQty[index] += 1;
      this.saveCart();
    }
    else{
      this.cart.products.push(product);
      this.cart.productQty.push(1);
      this.saveCart();
    }
    
    //debug logs
    console.log(this.cart.products.some(p => p.productId === product.productId));
    const foundIndex = this.cart.products.findIndex(p => p.productId === product.productId);
    console.log('Product found at index', foundIndex);
    this.GetCart().products.forEach(p => console.log(JSON.stringify(p)));
    this.GetCart().productQty.forEach(qty => console.log('product qty is:' + JSON.stringify(qty)));
  }

  GetCart(): ICart{
    this.cart = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    return this.cart
  }

  FindProductInCart(product: IProduct): number{
    const index = this.cart.products.findIndex(p => p.productId === product.productId);

    return index;
  }

  RemoveProductFromCart(product: IProduct): void {
    const index = this.FindProductInCart(product);

    if (index >-1){
      this.cart.products.splice(index, 1);
      this.cart.productQty.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart(){
    localStorage.clear()
  }

}
