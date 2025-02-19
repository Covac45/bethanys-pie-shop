import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../product-service/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../product-details/product-model';
import { ProductJumbotronComponent } from "../../product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-cheesecakes',
  imports: [CommonModule, RouterModule, ProductJumbotronComponent],
  templateUrl: './cheesecakes.component.html',
  styleUrl: './cheesecakes.component.scss'
})
export class CheesecakesComponent {

    productSvc = inject(ProductService);
    
    public cheesecakeProducts!: IProduct[];
  
    public jumbotronCheesecake: string = "/assets/images/products/cheesecake.jpg";

    ngOnInit(): void{
      this.productSvc.GetProducts().subscribe(products => 
        this.cheesecakeProducts = products.filter(p => p.productCategory === "Cheesecakes")
      );
    }

}
