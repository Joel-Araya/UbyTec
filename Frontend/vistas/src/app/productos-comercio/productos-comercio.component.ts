import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../productos/productos.model';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-productos-comercio',
  templateUrl: './productos-comercio.component.html',
  styleUrls: ['./productos-comercio.component.css']
})
export class ProductosComercioComponent implements OnInit {

  productosComercio:Producto[]=[];

  constructor(private api:ProductosService, private router:Router, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let cedula = this.activeroute.snapshot.paramMap.get('co_cedula');
    this.api.getProductosComercio(cedula).subscribe(data =>{
      this.productosComercio = data;
    })
  }

}
