import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any
  constructor( private cookie:CookieService ) { }
  setcart(){
    let items =JSON.parse(this.cookie.get("cart"))
    this.cart = items
  }
  addcart(item:any){
    let items = this.cookie.get("cart")
    if(items){
      let obj = JSON.parse(items)
    let add = ''
      obj.forEach((x:any) => {
        if(x.id == item.id ){
          add = ''
          alert('Item already exist in the cart')
          console.log("item already exist");
           
        }else{
          add = 'add'
          
        }
      });

      if(add != ''){
        obj.push(item)
        this.cookie.delete("cart")
        this.cookie.set("cart",JSON.stringify(obj))
        alert('Item added successfully')
        window.location.reload()
      }

    }else{
      let setitem = JSON.stringify([item])
      this.cookie.set("cart",setitem)
      alert('Item added successfully')
      window.location.reload()
    }
  }
}
