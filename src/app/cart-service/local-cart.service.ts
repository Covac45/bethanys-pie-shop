import { Injectable } from '@angular/core';
import { IProduct } from '../product-service/product-model';
import { ICartInterface } from './ICart-interface';
import { ICart } from './cart-model';
import { BehaviorSubject, findIndex } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { Itoast } from '../toast/Itoast';

@Injectable({
  providedIn: 'root'
})

export class CartService implements ICartInterface {

  private cartSource = new BehaviorSubject<ICart>(ICart.getInstance());
  cart$ = this.cartSource.asObservable();

  public shippingCost: number = 10.00
  
  constructor(private toastSvc: ToastService) { }

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

    const productAddToast: Itoast = {title: 'Product added to cart', message: product.productName + ' added to cart', isVisible: true}
    this.toastSvc.toast.set(productAddToast);
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
      
      const productRemovalToast: Itoast = {title: 'Product removed from cart', message: product.productName + ' removed from cart', isVisible: true}
      this.toastSvc.toast.set(productRemovalToast);
    }
  }

  clearCart(){
    
    this.cartSource.value.products.splice(0,this.cartSource.value.products.length)
    this.cartSource.value.productQty.splice(0,this.cartSource.value.productQty.length);
    
    const emptyCart: ICart = this.cartSource.value;
    this.cartSource.value.products.forEach(p=>console.log(JSON.stringify(p)))
    this.cartSource.value.productQty.forEach(qty=>console.log(JSON.stringify(qty)))

    this.cartSource.next(emptyCart);
    localStorage.removeItem('cart_items');
    this.saveCart();

    const clearProductsToast: Itoast = {title: 'Cart cleared', message: 'All products removed from cart', isVisible: true}
    this.toastSvc.toast.set(clearProductsToast);

  }

  getTotalCartPrice(): number {
    const cart = this.cartSource.value;
    return cart.products.reduce((total, product, index) => {
      return total + (product.price * cart.productQty[index]) + this.shippingCost;
    }, 0);
  }

  updateProductQuantity(index: number, newQuantity: number): void {
    if (newQuantity < 1) {
      this.cartSource.value.productQty[index] = 1;
    } else {
      this.cartSource.next(this.cartSource.value);
      this.saveCart();
    }
  }

  updateCart(newCart: ICart){
    this.cartSource.next(newCart)
  }

}
