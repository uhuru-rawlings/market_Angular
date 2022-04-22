import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:any ='https://fakestoreapi.com/products'
  constructor( private http:HttpClient ) { }

  getproducts():Observable<any>{
    return this.http.get(this.url)
  }

}
