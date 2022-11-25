import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AfiliadosService } from '../servicios/afiliados.service';
import { PedidosService } from '../servicios/pedidos.service';
import { datosSolicitud } from './datos.interface';

@Component({
  selector: 'app-aceptar-rechazar-solicitud',
  templateUrl: './aceptar-rechazar-solicitud.component.html',
  styleUrls: ['./aceptar-rechazar-solicitud.component.css']
})
export class AceptarRechazarSolicitudComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:AfiliadosService) { }

  datosRepartidor!:datosSolicitud;
  editarForm = new FormGroup({
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


  ngOnInit(): void {
    let cedula = this.activeroute.snapshot.paramMap.get('cedula');
    
    /* console.log(repartidor_usuario); */
    this.api.getUnaSolicitud(cedula).subscribe(data =>{
      this.datosRepartidor = data;
      this.editarForm.setValue({
        'cedula': cedula!,
        'tipo_comercio': this.datosRepartidor.tipo_comercio!,
        'nombre_comercio':  this.datosRepartidor.nombre_comercio!,
        'num_sinpe':  this.datosRepartidor.num_sinpe!,
        'administrador_comercio': this.datosRepartidor.administrador_comercio!,
        'correo': this.datosRepartidor.correo!,
        'provincia':  this.datosRepartidor.provincia!,
        'canton':  this.datosRepartidor.canton!,
        'distrito':  this.datosRepartidor.distrito!,
        'a_usuario': this.datosRepartidor.a_usuario!,
        'estado': this.datosRepartidor.estado!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  /**
   * Método que envía los datos del nuevo administrador al api
   * @param form 
   */
  postForm(form:datosSolicitud){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('cedula');
    let estado = this.activeroute.snapshot.paramMap.get('estado');
    //let ced = Number(repartidor_usuario);
    this.api.putSolicitud(form, repartidor_usuario).subscribe(data =>{
      console.log(data);
    });
  }

  rechazado(form:datosSolicitud){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('cedula');
    //let ced = Number(repartidor_usuario);
    this.api.putSolicitud(form, repartidor_usuario).subscribe(data =>{
      console.log(data);
    });
  }

  /**
   * Método que se utiliza para eliminar administradores
   * @param form 
   */
  /* eliminar(form:datosSolicitud){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('cedula');
    let datos:datosSolicitud = this.editarForm.value;
    this.api.deleteAdministrador(form,repartidor_usuario).subscribe(data=>{
      console.log(data);
    });
    console.log(datos);
  } */

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['adminAfiliaciones']);
  }


}
