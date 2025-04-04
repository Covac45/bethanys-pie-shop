import { Component } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IDashboardData } from './IDashboardData';
import { OrderService } from '../order-service/order.service';

@Component({
  selector: 'BPS-product-management',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {

  dashData: IDashboardData = IDashboardData.getInstance();
  totalProducts: number = 0;
  totalProductCategories: number = 0;
  averageProductPrice: number = 0;

  mostPopularProduct: string = '';

  constructor(private productSvc: ProductService, private orderSvc: OrderService) {}

  ngOnInit(): void {
    this.productSvc.GetProducts().subscribe(products => {
      this.dashData.dashProducts = products
      this.totalProducts = this.dashData.dashProducts.length

      this.totalProductCategories = this.dashData.dashProducts.filter(
          (product, index, array) =>
            array.findIndex(t =>
              t.productCategory === product.productCategory)
              === index)
              .length;
      
      this.dashData.dashProducts.forEach(p => this.averageProductPrice += p.price);
      this.averageProductPrice = this.averageProductPrice/this.totalProducts;
    })

    /*this.orderSvc.getOrderHistory().subscribe(orders => {
      this.averagePrice = data.averagePrice;
      this.mostPopularProduct = data.mostPopularProduct;
    });*/
  }
}
