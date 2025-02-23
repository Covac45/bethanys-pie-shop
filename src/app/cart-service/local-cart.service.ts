import { Injectable } from '@angular/core';
import { IProduct } from '../product-page/product-details/product-model';
import { ICartInterface } from './icart-interface';
import { ICart } from './cart-model';
import { BehaviorSubject, findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService implements ICartInterface {

  public cartSource = new BehaviorSubject<ICart>(ICart.getInstance());
  cart$ = this.cartSource.asObservable();
  
  constructor() { }

  LoadCart(){
    return JSON.parse(localStorage.getItem('cart_items') || '{"products": [], "productQty": []}');
  }

  saveCart():void {
    const cart = this.cartSource.value;
    localStorage.setItem('cart_items', JSON.stringify(cart));
  }

  AddProductToCart(product: IProduct): void
  {
    const cart = this.cartSource.value;
    var index = this.FindProductInCart(product);

    if(index > -1){
      cart.productQty[index] += 1;
    }
    else{
      cart.products.push(product);
      cart.productQty.push(1);
    }
    
    this.saveCart();
    this.cartSource.next({ ...cart});
  }

  GetCart(): ICart{
    return this.cartSource.value
  }

  FindProductInCart(product: IProduct): number{
    const index = this.cartSource.value.products.findIndex(p => p.productId === product.productId);

    return index;
  }

  RemoveProductFromCart(product: IProduct): void {
    const cart = this.cartSource.value;
    const index = this.FindProductInCart(product);

    if (index >-1){
      cart.products.splice(index, 1);
      cart.productQty.splice(index, 1);

      this.cartSource.next(cart)
      this.saveCart();
    }
  }

  clearCart(){
    const emptyCart: ICart = { products: [], productQty: [] };
    this.cartSource.next(emptyCart);
    localStorage.removeItem('cart_items');
  }

}
