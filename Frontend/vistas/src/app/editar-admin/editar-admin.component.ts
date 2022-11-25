import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from '../servicios/admins.service';
import { datosAdmin } from './datos.interface';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent implements OnInit {

  @Input() usuario?: datosAdmin;
  @Output() datosActualizados = new EventEmitter<datosAdmin[]>();

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:AdminsService) { }

  datosRepartidor!:datosAdmin;
  editarForm = new FormGroup({
    cedula: new FormControl('', {nonNullable: true}),
    usuario: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
  });


  ngOnInit(): void {
    let cedula_admin = this.activeroute.snapshot.paramMap.get('cedula');
    
    /* console.log(repartidor_usuario); */
    this.api.getUnAdministrador(cedula_admin).subscribe(data =>{
      this.datosRepartidor = data;
      this.editarForm.setValue({
        'cedula': cedula_admin!,
        'usuario': this.datosRepartidor.usuario!,
        'password':  this.datosRepartidor.password!,
        'nombre':  this.datosRepartidor.nombre!,
        'provincia':  this.datosRepartidor.provincia!,
        'canton':  this.datosRepartidor.canton!,
        'distrito':  this.datosRepartidor.distrito!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  postForm(form:datosAdmin){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('cedula');
    //let ced = Number(repartidor_usuario);
    this.api.putAdministrador(form, repartidor_usuario).subscribe(data =>{
      console.log(data);
    });
  }

  eliminar(){
    /* let repartidor_usuario = this.activeroute.snapshot.paramMap.get('usuario');
    let datos:datosAdmin = this.editarForm.value;
    this.api.deleteAdministrador(datos,repartidor_usuario).subscribe(data=>{
      console.log(data);
    });
    console.log(datos); */
  }

  salir(){
    this.router.navigate(['admins']);
  }

}
