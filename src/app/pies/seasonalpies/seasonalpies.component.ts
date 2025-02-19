import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../product-details/product-model';
import { ProductService } from '../../product-service/product.service';

@Component({
  selector: 'BPS-seasonalpies',
  imports: [RouterModule, CommonModule],
  templateUrl: './seasonalpies.component.html',
  styleUrl: './seasonalpies.component.scss'
})
export class SeasonalpiesComponent {

      productSvc = inject(ProductService);
      
      public seasonalPieProducts!: IProduct[];
    
      ngOnInit(): void{
        this.productSvc.GetProducts().subscribe(products => 
          this.seasonalPieProducts = products.filter(p => p.productCategory === "Seasonal Pies")
        );
      }

}
