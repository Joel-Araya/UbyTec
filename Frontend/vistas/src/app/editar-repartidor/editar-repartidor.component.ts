import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Repartidor } from '../repartidores/repartidores.model';
import { RepartidoresService } from '../servicios/repartidores.service';
import { Datos } from './datos.interface';


@Component({
  selector: 'app-editar-repartidor',
  templateUrl: './editar-repartidor.component.html',
  styleUrls: ['./editar-repartidor.component.css']
})
export class EditarRepartidorComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:RepartidoresService) { }
;
  datosRepartidor!:Datos;
  editarForm = new FormGroup({
    usuario: new FormControl('', {nonNullable: true}),
    correo: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
    estado: new FormControl('', {nonNullable: true}),
  });

  ngOnInit(): void {
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('usuario');
    /* console.log(repartidor_usuario); */
    this.api.getUnRepartidor(repartidor_usuario).subscribe(data =>{
      this.datosRepartidor = data;
      this.editarForm.setValue({
        'usuario': repartidor_usuario!,
        'correo': this.datosRepartidor.correo!,
        'password':  this.datosRepartidor.password!,
        'nombre':  this.datosRepartidor.nombre!,
        'provincia':  this.datosRepartidor.provincia!,
        'canton':  this.datosRepartidor.canton!,
        'distrito':  this.datosRepartidor.distrito!,
        'estado': this.datosRepartidor.estado!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  postForm(form:Datos){
    /* console.log(form) */;
    this.api.putRepartidor(form).subscribe(data =>{
      
    });
  }

  eliminar(){
    let datos:Datos = this.editarForm.value;
    this.api.deleteRepartidor(datos).subscribe(data=>{
      console.log(data);
    });
  }

}
