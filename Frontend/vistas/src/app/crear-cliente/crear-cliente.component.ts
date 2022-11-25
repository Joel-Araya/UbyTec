import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosCliente } from '../editar-cliente/datos.interface';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  nuevoForm = new FormGroup({
    cedula: new FormControl('', {nonNullable: true}),
    usuario: new FormControl('', {nonNullable: true}),   
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    apellido1: new FormControl('', {nonNullable: true}),
    apellido2: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
    telefono: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:ClientesService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Método que envía los datos del nuevo cliente al api
   * @param form 
   */
  postForm(form:datosCliente){
    this.api.postCliente(form).subscribe(data =>{
      console.log(data)
    })
  }

  /**
   * Método para salir 
   */
  salir(){
    this.router.navigate(['admins']);
  }

}
