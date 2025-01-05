import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product-model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'BPS-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
    @Input() product!: IProduct;
    id!: number;
    productSvc = inject(ProductService);

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){
      this.route.params.subscribe(params => {this.id = params['id']});

      console.log(this.productSvc.GetThisProduct(this.id));

      console.log(this.productSvc.GetProducts());
     }

  GetImageUrl(product: IProduct){
    if (!product) return '';
    return '/assets/images/' + product.imageName;
  }

  GetSmallImageUrl(product: IProduct){
    if (!product) return '';
    return '/assets/images/' + product.smallImageName;
  }


}
