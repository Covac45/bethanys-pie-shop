import { Component, inject } from '@angular/core';
import { IProduct } from '../../product-details/product-model';
import { ProductService } from '../../product-service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductJumbotronComponent } from "../../product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-allpies',
  imports: [CommonModule, RouterModule, ProductJumbotronComponent],
  templateUrl: './allpies.component.html',
  styleUrl: './allpies.component.scss'
})

export class AllpiesComponent {

  productSvc = inject(ProductService);
  
  public allProducts!: IProduct[];

  public jumbotronAllPies: string = "/assets/images/carousel2.jpg";

  ngOnInit(): void{
    this.productSvc.GetProducts().subscribe(products => {
      this.allProducts = products,
      products.forEach(product => console.log(JSON.stringify(product)))
    });
  }

}
