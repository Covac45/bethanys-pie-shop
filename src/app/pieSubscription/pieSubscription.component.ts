import { Component } from '@angular/core';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-pieSubscription',
  imports: [ProductJumbotronComponent],
  templateUrl: './pieSubscription.component.html',
  styleUrl: './pieSubscription.component.scss'
})
export class PieSubscriptionComponent {

  public jumbotronPieSubscription = "/assets/images/carousel3.jpg";

}
