import { Component } from '@angular/core';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";

@Component({
  selector: 'BPS-contact',
  imports: [ProductJumbotronComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public jumbotronContact: string = "/assets/images/carousel3.jpg";

}
