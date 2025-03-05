import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { IProduct } from './product-model';
import { map, Observable } from 'rxjs';
import { IDashboardData } from '../product-management/IDashboardData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:5043/api';

  private dashData:IDashboardData = IDashboardData.getInstance();

  constructor(private http: HttpClient, ) {}

  GetProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL + '/products');
  }

  GetThisProduct(id: number) : Observable<IProduct> {
    return this.http.get<IProduct>(this.apiURL + '/products/' + id);
  }

  getDashboardProductData(){
    this.GetProducts().subscribe(products => this.dashData.dashProducts = products);
  }
  
}