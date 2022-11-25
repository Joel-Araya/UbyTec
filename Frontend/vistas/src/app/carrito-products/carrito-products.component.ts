import { Component, OnInit } from '@angular/core';
import { ApiFakeService } from '../servicios/api-fake.service';
import { CartService } from '../servicios/cart.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-carrito-products',
  templateUrl: './carrito-products.component.html',
  styleUrls: ['./carrito-products.component.css']
})
export class CarritoProductsComponent implements OnInit {

  public productList : any;

  constructor(private api : ApiFakeService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});

      });
    })
  }

  /**
   * Método para añadir items al carrito
   * @param item 
   */
  addtocart(item : any){
    this.cartService.addtoCart(item);
  }

}

