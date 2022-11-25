import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from './productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[];

  constructor(private api:ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getProductos().subscribe(data =>{
      this.productos = data;
    })
  }

  editarProducto(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarProducto', usuario]);
  }

  nuevoProducto(){
    this.router.navigate(['insertarProducto']);
  }

}
