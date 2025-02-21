import { Component } from '@angular/core';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-order',
  imports: [ProductJumbotronComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  public jumbotronOrder: string = "/assets/images/carousel3.jpg";

}
