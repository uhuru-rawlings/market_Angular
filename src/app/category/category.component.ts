import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any
  constructor(private CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.getcategory()
  }
  getcategory(){
    this.CategoryService.getcategories().subscribe((data) => {
      this.categories = data
    })
  }

}
