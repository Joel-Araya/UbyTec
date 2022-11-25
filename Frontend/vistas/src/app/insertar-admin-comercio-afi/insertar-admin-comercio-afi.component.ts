import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosAdminAfi } from '../editar-admin-comercio-afi/datos.interface';
import { AdminComercioAfiService } from '../servicios/admin-comercio-afi.service';

@Component({
  selector: 'app-insertar-admin-comercio-afi',
  templateUrl: './insertar-admin-comercio-afi.component.html',
  styleUrls: ['./insertar-admin-comercio-afi.component.css']
})
export class InsertarAdminComercioAfiComponent implements OnInit {

  nuevoForm = new FormGroup({
    usuario: new FormControl('', {nonNullable: true}),
    correo: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:AdminComercioAfiService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:datosAdminAfi){
    this.api.postAdmin(form).subscribe(data =>{
      console.log(data)
    })
  }

  salir(){
    this.router.navigate(['comercioAfiliado']);
  }
}
