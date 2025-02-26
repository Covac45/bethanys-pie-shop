import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProduct } from '../../product-service/product-model';
import { ProductService } from '../../product-service/product.service';
import { CommonModule } from '@angular/common';
import { map, switchMap, tap } from 'rxjs';
import { ProductJumbotronComponent } from "../product-jumbotron/product-jumbotron.component";
import { OffcanvasCartComponent } from "../offcanvas-cart/offcanvas-cart.component";
import { CartService } from '../../cart-service/local-cart.service';

@Component({
  selector: 'BPS-product-details',
  imports: [CommonModule, ProductJumbotronComponent, RouterModule, OffcanvasCartComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  @Output() addToBasket = new EventEmitter();  
  
  productSvc = inject(ProductService);
  cartSvc = inject(CartService);


    public productById!: IProduct;
    public productImagePath!: string;
    public id!: number;

    
    public allProducts!: IProduct[];
    public filteredProducts!: IProduct[];
    public categoreyRouterLink!: string


  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {this.id = params['id']});

      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.route.params.pipe(
        tap(params => this.id = Number(params['id'])),
        switchMap(params => this.productSvc.GetThisProduct(Number(params['id']))),
        tap(product => {
          this.productById = product;
          this.productImagePath = `/assets/images/products/${product.imagePath}`;
          this.categoreyRouterLink = product.productCategory.toLowerCase().trim().replace(/\s+/g, "")
        }),
        switchMap(product =>
          this.productSvc.GetProducts().pipe(
            map(products => 
              products.filter(p => p.productCategory === product.productCategory && p.productId !== product.productId)
            )
          )
        )
      ).subscribe(filtered => {
        this.filteredProducts = filtered;
      });

      this.scrollToTop();
    }

    scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    AddToCart(product: IProduct): void{
      this.cartSvc.AddProductToCart(product);
    }
}
