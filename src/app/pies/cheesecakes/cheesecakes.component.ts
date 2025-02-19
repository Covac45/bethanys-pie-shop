import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../product-service/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../product-details/product-model';

@Component({
  selector: 'BPS-cheesecakes',
  imports: [CommonModule, RouterModule],
  templateUrl: './cheesecakes.component.html',
  styleUrl: './cheesecakes.component.scss'
})
export class CheesecakesComponent {

    productSvc = inject(ProductService);
    
    public cheesecakeProducts!: IProduct[];
  
    ngOnInit(): void{
      this.productSvc.GetProducts().subscribe(products => 
        this.cheesecakeProducts = products.filter(p => p.productCategory === "Cheesecakes")
      );
    }

}
