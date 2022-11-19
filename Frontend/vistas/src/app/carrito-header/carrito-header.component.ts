import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { observable } from 'rxjs';
import { CartService } from '../servicios/cart.service';
@Component({
  selector: 'app-carrito-header',
  templateUrl: './carrito-header.component.html',
  styleUrls: ['./carrito-header.component.css']
})
export class CarritoHeaderComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService : CartService ) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe (res => {
      this.totalItem = res.length;
      
    }) 
  }

}
