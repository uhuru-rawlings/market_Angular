import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any
  index:any
  products:any
  constructor(private CategoryService:CategoryService,private carservice:CartService) { }

  ngOnInit(): void {
    this.getcategory()
  }
  getcategory(){
    this.CategoryService.getcategories().subscribe((data) => {
      this.categories = data
      this.getitems(0)
    })
  }
  getitems(index:any){
    
   let items = this.categories[index]
   this.CategoryService.getitems(items).subscribe((data) =>{
     this.products = data
   })
  }
  addcart(item:any){
    this.carservice.addcart(item)
  }
}
