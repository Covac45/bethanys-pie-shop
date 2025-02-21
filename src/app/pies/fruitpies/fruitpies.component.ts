import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductJumbotronComponent } from "../../product-page/product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-fruitpies',
  imports: [RouterModule, ProductJumbotronComponent],
  templateUrl: './fruitpies.component.html',
  styleUrl: './fruitpies.component.scss'
})
export class FruitpiesComponent {

  public jumbotronFruitPies: string = "/assets/images/products/strawberrypie.jpg";

}
