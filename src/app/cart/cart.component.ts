import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any
  totlaprice:any
  quantity:any
  totalquanity:any
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
    this.setcart()
  }
  
  setcart(){
    let data = JSON.parse(this.cookie.get("cart"))
    if(data.length == 0){
      this.items = "noitem"
    }else{
      this.items = data
      this.gettotal()
    }
  }
  gettotal(){
    let price = 0
    for(let i =0; i < this.items.length; i++){
       price = price + this.items[i].price
    }
    this.totlaprice = price
  }
  increment(item:any){
    console.log(this.totalquanity)
    console.log(item)
  }
  checkout(){
    let cart = this.cookie.get("cart")
    if(cart){
      alert("Thank you for shopping with us.")
      this.cookie.delete("cart")
    // this.cookie.set("cart","[]")
      window.location.reload()
    }else{
      alert("you have no items to checkout, please add to cart")
    }
    
  }
  deletecart(item:any){
     let items = this.cookie.get("cart")
     let itemsarray = JSON.parse(items)
     if(items){
       let setnew = 'false'
       for(let x = 0; x < itemsarray.length; x++){
          if(itemsarray[x].id == item.id){
            itemsarray.splice(x,1)
            setnew = 'true'
            // window.location.reload
          }
       }
       if(setnew == 'true'){
         this.cookie.delete("cart")
         this.cookie.set("cart", JSON.stringify(itemsarray))
         window.location.reload()
       }
     }
  }
}
