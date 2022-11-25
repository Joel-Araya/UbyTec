import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosProducto } from '../editar-productos/datos.interface';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-insertar-productos',
  templateUrl: './insertar-productos.component.html',
  styleUrls: ['./insertar-productos.component.css']
})
export class InsertarProductosComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre: new FormControl('', {nonNullable: true}),
    co_cedula: new FormControl('', {nonNullable: true}),
    categoria: new FormControl('', {nonNullable: true}),
    precio: new FormControl('', {nonNullable: true}),
    foto: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:ProductosService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:datosProducto){
    this.api.postProducto(form).subscribe(data =>{
      console.log(data)
    })
    console.log(form);
  }

  salir(){
    this.router.navigate(['productos']);
  }

}
