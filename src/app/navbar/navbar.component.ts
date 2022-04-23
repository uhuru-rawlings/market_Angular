import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  total:any
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.setcart()
  }

  setcart(){
    this.cartservice.setcart()
    let totals = this.cartservice.cart
    this.total = totals.length
    console.log(this.total)
  }

}
