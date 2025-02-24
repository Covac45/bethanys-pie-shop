import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-login',
  imports: [RouterModule, ProductJumbotronComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public jumbotronLogin = '/assets/images/carousel3.jpg'

}
