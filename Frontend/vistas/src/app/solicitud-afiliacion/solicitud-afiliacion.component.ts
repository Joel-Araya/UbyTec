import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosAfiliado } from '../editar-afiliado/datos.interface';
import { AfiliadosService } from '../servicios/afiliados.service';
import { SolicitudService } from '../servicios/solicitud.service';
import { Solicitud } from './solicitud.model';

@Component({
  selector: 'app-solicitud-afiliacion',
  templateUrl: './solicitud-afiliacion.component.html',
  styleUrls: ['./solicitud-afiliacion.component.css']
})
export class SolicitudAfiliacionComponent implements OnInit {

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
   * Método para enviar datos de la solicitud al api
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
    this.router.navigate(['menuAfiliados']);
  }
}
