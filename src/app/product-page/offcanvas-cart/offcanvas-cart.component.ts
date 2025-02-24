import { Component, inject, Inject } from '@angular/core';
import { CartService } from '../../cart-service/local-cart.service';
import { IProduct } from '../product-details/product-model';
import { ICart } from '../../cart-service/cart-model';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'BPS-offcanvas-cart',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './offcanvas-cart.component.html',
  styleUrl: './offcanvas-cart.component.scss'
})
export class OffcanvasCartComponent {
  
  public cartSubscription!: Subscription;

  public cart!: ICart;
  public products: IProduct[] = []
  public productQty: number[] = []

constructor(private cartSvc: CartService){}

  ngOnInit(): void{
    this.cartSubscription = this.cartSvc.cart$.subscribe(updatedCart => {
      this.cart = updatedCart;
    });
    this.products = this.cart.products;
    this.productQty = this.cart.productQty;

  }

  getTotalPrice(){
    return this.cartSvc.getTotalCartPrice();
  }

  updateProductQuantity(index: number, newQuantity: number): void {
    this.cartSvc.updateProductQuantity(index, newQuantity);
  }

  removeProduct(product: IProduct){
    this.cartSvc.RemoveProductFromCart(product);
  }

  clearCart(){
    this.cartSvc.clearCart();
  }

}
