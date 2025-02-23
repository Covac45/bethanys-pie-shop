import { Component, inject, Inject } from '@angular/core';
import { CartService } from '../../cart-service/local-cart.service';
import { IProduct } from '../product-details/product-model';
import { ICart } from '../../cart-service/cart-model';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'BPS-offcanvas-cart',
  imports: [CommonModule],
  templateUrl: './offcanvas-cart.component.html',
  styleUrl: './offcanvas-cart.component.scss'
})
export class OffcanvasCartComponent {
  
  //private cartSvc = inject(CartService)
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

  ngOnChanges(){
    this.cartSubscription = this.cartSvc.cart$.subscribe(updatedCart => {
      this.cart = updatedCart;
    });
    this.products = this.cart.products;
    this.productQty = this.cart.productQty;
    
    /*this.cart = ICart.getInstance();
    this.products = this.cart.products;
    this.productQty = this.cart.productQty;
    console.log('Change detected')*/
  }

}
