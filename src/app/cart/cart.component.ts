import { Component, Inject } from '@angular/core';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";
import { RouterModule } from '@angular/router';
import { CartService } from '../cart-service/local-cart.service';
import { IProduct } from '../product-service/product-model';
import { ICart } from '../cart-service/cart-model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'BPS-cart',
  imports: [RouterModule, CommonModule, FormsModule, ProductJumbotronComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  public jumbotronCart: string = "/assets/images/carousel3.jpg";
  public allProducts: IProduct[] = []
  public randomProducts: IProduct[] = [];

  public cartSubscription!: Subscription;
  
  public cart!: ICart;
  public products: IProduct[] = []
  public productQty: number[] = []
  
  constructor(private cartSvc: CartService, private productSvc: ProductService){
  }
  
    ngOnInit(): void{
      this.cartSubscription = this.cartSvc.cart$.subscribe(updatedCart => {
        this.cart = updatedCart;
      });

      this.cartSvc.updateCart(this.cartSvc.LoadCart())

      this.products = this.cart.products;
      this.productQty = this.cart.productQty;
      

      this.productSvc.GetProducts().subscribe(products => {
        this.allProducts = products;
        this.randomProducts = this.getRandomProducts();
      })
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

    scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    getRandomProducts(): IProduct[] {
      if (!this.allProducts || this.allProducts.length <= 4) {
        return this.allProducts;
      }
  
      const shuffled = this.allProducts.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    }

}
