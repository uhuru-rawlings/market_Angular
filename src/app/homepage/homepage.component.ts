import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products:any
  constructor( private ProductsService:ProductsService,private CartService:CartService ) { }

  ngOnInit(): void {
    this.getproducts()
  }
  
  getproducts(){
    this.ProductsService.getproducts().subscribe((data) =>{
      this.products = data
    })
  }

  addcart(item:any){
    this.CartService.addcart(item)
  }
}
