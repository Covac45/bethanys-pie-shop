import { Component, inject } from '@angular/core';
import { IProduct } from '../../product-details/product-model';
import { ProductService } from '../../product-service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'BPS-allpies',
  imports: [CommonModule, RouterModule],
  templateUrl: './allpies.component.html',
  styleUrl: './allpies.component.scss'
})

export class AllpiesComponent {

  productSvc = inject(ProductService);
  
  public allProducts!: IProduct[];

  ngOnInit(): void{
    this.productSvc.GetProducts().subscribe(products => {
      this.allProducts = products,
      products.forEach(product => console.log(JSON.stringify(product)))
    });
  }

}
