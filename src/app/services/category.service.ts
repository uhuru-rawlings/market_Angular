import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:any = 'https://fakestoreapi.com/products/categories'
  constructor(private http:HttpClient) { }

  getcategories():Observable<any>{
    return this.http.get(this.url)
  }
  getitems(category:any):Observable<any>{
  let categ =`https://fakestoreapi.com/products/category/${ category }`
    return this.http.get(categ)
  }
}
