import { Component, OnInit } from '@angular/core';
import { Producto } from './productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    debugger;
    this.productos.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  productos:Producto[]=[]

  agregarProducto(){
    let productos = new Producto(this.Nombre, this.Categoria, this.Precio, this.IsEdit)
    this.productos.push(productos)
  }

  Nombre:string="";
  Categoria:string="";
  Precio:string="";
  IsEdit:boolean=false;

}
