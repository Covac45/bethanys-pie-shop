import { Component, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'BPS-product-jumbotron',
  imports: [RouterModule],
  templateUrl: './product-jumbotron.component.html',
  styleUrl: './product-jumbotron.component.scss'
})
export class ProductJumbotronComponent {

  @Input() jumbotronImagePath!: string; 
  @HostBinding('style.--jumbotronUrl') jumbotronUrl!:string

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.jumbotronUrl = this.jumbotronImagePath;
  }
  

}

