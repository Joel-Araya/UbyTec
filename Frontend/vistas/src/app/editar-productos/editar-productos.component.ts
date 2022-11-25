import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { datosProducto } from './datos.interface';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:ProductosService) { }

  datosProducto!:datosProducto;
  editarForm = new FormGroup({
    nombre: new FormControl('', {nonNullable: true}),
    co_cedula: new FormControl('', {nonNullable: true}),
    categoria: new FormControl('', {nonNullable: true}),
    precio: new FormControl('', {nonNullable: true}),
    foto: new FormControl('', {nonNullable: true}),
  });

  
  ngOnInit(): void {
    let nombre_producto = this.activeroute.snapshot.paramMap.get('nombre');
    
    /* console.log(repartidor_usuario); */
    this.api.getUnProducto(nombre_producto).subscribe(data =>{
      this.datosProducto = data;
      this.editarForm.setValue({
        'nombre':  nombre_producto!,
        'co_cedula':  this.datosProducto.co_cedula!,
        'categoria':  this.datosProducto.categoria!,
        'precio':  this.datosProducto.precio!,
        'foto': this.datosProducto.foto!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  /**
   * Método para enviar un nuevo producto al api
   * @param form 
   */
  postForm(form:datosProducto){
    let nombre_producto = this.activeroute.snapshot.paramMap.get('nombre');

    this.api.putProducto(form, nombre_producto).subscribe(data =>{
      console.log(data);
    });
  }

  /**
   * Método para eliminar productos
   * @param form 
   */
  eliminar(form:datosProducto){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('nombre');
    let datos:datosProducto = this.editarForm.value;
    this.api.deleteProducto(form,repartidor_usuario).subscribe(data=>{
      console.log(data);
    });
    console.log(datos);
  }

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['productos']);
  }

}
