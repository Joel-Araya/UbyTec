import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosAfiliado } from '../editar-afiliado/datos.interface';
import { AfiliadosService } from '../servicios/afiliados.service';

@Component({
  selector: 'app-insertar-afiliado',
  templateUrl: './insertar-afiliado.component.html',
  styleUrls: ['./insertar-afiliado.component.css']
})
export class InsertarAfiliadoComponent implements OnInit {

  nuevoForm = new FormGroup({
    cedula: new FormControl('', {nonNullable: true}),
    tipo_comercio: new FormControl('', {nonNullable: true}),
    nombre_comercio: new FormControl('', {nonNullable: true}),
    num_sinpe: new FormControl('', {nonNullable: true}),
    administrador_comercio: new FormControl('', {nonNullable: true}),
    correo: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
    a_usuario: new FormControl('', {nonNullable: true}),
    estado: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:AfiliadosService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Métdodo para enviar los datos del afiliado
   * @param form 
   */
  postForm(form:datosAfiliado){
    this.api.postAfiliado(form).subscribe(data =>{
      console.log(data)
    })
    console.log(form)
  }

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['afiliados']);
  }

}
