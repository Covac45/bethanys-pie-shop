import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'BPS-product-jumbotron',
  imports: [RouterModule, NgStyle],
  templateUrl: './product-jumbotron.component.html',
  styleUrl: './product-jumbotron.component.scss'
})
export class ProductJumbotronComponent {

  @Input() jumbotronImagePath!: string; 
  jumbotronUrl!:string
  
  dynamicStyling: object = {};

  ngOnInit(): void {
    this.updateStyles();
  }

  ngOnChanges(): void{
      this.jumbotronUrl = this.jumbotronImagePath;
      this.updateStyles();
  }

  private updateStyles(): void {
    this.dynamicStyling = {
      'background': `url(${this.jumbotronUrl}) 0% 0% / cover no-repeat fixed`
    }
  };
}

