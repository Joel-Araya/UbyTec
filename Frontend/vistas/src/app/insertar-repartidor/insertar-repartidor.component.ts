import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Datos } from '../editar-repartidor/datos.interface';
import { Repartidor } from '../repartidores/repartidores.model';
import { RepartidoresService } from '../servicios/repartidores.service';

@Component({
  selector: 'app-insertar-repartidor',
  templateUrl: './insertar-repartidor.component.html',
  styleUrls: ['./insertar-repartidor.component.css']
})
export class InsertarRepartidorComponent implements OnInit {

  nuevoForm = new FormGroup({
    usuario: new FormControl('', {nonNullable: true}),
    correo: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
    estado: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:RepartidoresService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Método para insertar un nuevo repartidor
   * @param form 
   */
  postForm(form:Datos){
    this.api.postRepartidor(form).subscribe(data =>{
      console.log(data)
    })
  }

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['repartidores']);
  }

}
