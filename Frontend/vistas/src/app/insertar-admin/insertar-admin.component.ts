import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrador } from '../administradores/admins.model';
import { datosAdmin } from '../editar-admin/datos.interface';
import { AdminsService } from '../servicios/admins.service';

@Component({
  selector: 'app-insertar-admin',
  templateUrl: './insertar-admin.component.html',
  styleUrls: ['./insertar-admin.component.css']
})
export class InsertarAdminComponent implements OnInit {

  nuevoForm = new FormGroup({
    cedula: new FormControl('', {nonNullable: true}),
    usuario: new FormControl('', {nonNullable: true}),   
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:AdminsService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Método para insertar un nuevo administrador
   * @param form 
   */
  postForm(form:datosAdmin){
    this.api.postAdministrador(form).subscribe(data =>{
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