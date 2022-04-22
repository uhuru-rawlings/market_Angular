import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products:any
  constructor( private ProductsService:ProductsService ) { }

  ngOnInit(): void {
    this.getproducts()
  }
  
  getproducts(){
    this.ProductsService.getproducts().subscribe((data) =>{
      this.products = data
    })
  }
}
