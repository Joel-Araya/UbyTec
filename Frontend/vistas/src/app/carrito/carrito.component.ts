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
 
  /**
   * Método constructor, se le inyecta el servicio de carrito
   * @param cartService 
   */
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res; 
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  //Metodos para el carrito 
  
  /**
   * Método para quitar un item del carrito
   * @param item 
   */
  removeItem(item: any){
    this.cartService.removeCartItem(item);

  }

  /**
   * Método para vaciar el carrito
   */
  emptycart(){
    this.cartService.removeAllCart();
  }

}
