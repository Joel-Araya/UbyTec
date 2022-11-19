import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../servicios/cart.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public product : any = [];
  public grandTotal !: number;
 
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res; 
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  //Metodos para el carrito 
  
  removeItem(item: any){
    this.cartService.removeCartItem(item);

  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
