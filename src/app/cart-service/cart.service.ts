import { Injectable } from '@angular/core';
import { IProduct } from '../product-page/product-details/product-model';
import { ICartInterface } from './icart-interface';

@Injectable({
  providedIn: 'root'
})

export class CartService implements ICartInterface {

  public cart: IProduct[] = [];

  constructor() { }

  saveCart():void {
    localStorage.setItem('cart_items', JSON.stringify(this.cart));
  }

  AddProductToCart(product: IProduct): void
  {
    this.cart.push(product);
    this.saveCart();
  }

  GetCart(): IProduct[]{
    this.cart = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    return this.cart 
  }

  FindProductInCart(product: IProduct): number{
    const index = this.cart.findIndex((p: any) => p.ProductId === product.productId)

    return index;
  }

  RemoveProductFromCart(product: IProduct): void {
    const index = this.FindProductInCart(product);

    if (index >-1){
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart(){
    localStorage.clear()
  }

}
