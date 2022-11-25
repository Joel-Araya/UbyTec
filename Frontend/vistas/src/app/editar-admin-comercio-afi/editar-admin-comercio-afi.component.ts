import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminComercioAfiService } from '../servicios/admin-comercio-afi.service';
import { datosAdminAfi } from './datos.interface';

@Component({
  selector: 'app-editar-admin-comercio-afi',
  templateUrl: './editar-admin-comercio-afi.component.html',
  styleUrls: ['./editar-admin-comercio-afi.component.css']
})
export class EditarAdminComercioAfiComponent implements OnInit {

  @Input() usuario?: datosAdminAfi;
  @Output() datosActualizados = new EventEmitter<datosAdminAfi[]>();

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:AdminComercioAfiService) { }

  datosAdminAfi!:datosAdminAfi;
  editarForm = new FormGroup({
    usuario: new FormControl('', {nonNullable: true}),
    correo: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    nombre: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
  });


  ngOnInit(): void {
    let usuario_admin = this.activeroute.snapshot.paramMap.get('usuario');
    
    /* console.log(repartidor_usuario); */
    this.api.getUnAdmin(usuario_admin).subscribe(data =>{
      this.datosAdminAfi = data;
      this.editarForm.setValue({
        'usuario': usuario_admin!,
        'correo': this.datosAdminAfi.correo!,
        'password':  this.datosAdminAfi.password!,
        'nombre':  this.datosAdminAfi.nombre!,
        'provincia':  this.datosAdminAfi.provincia!,
        'canton':  this.datosAdminAfi.canton!,
        'distrito':  this.datosAdminAfi.distrito!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  postForm(form:datosAdminAfi){
    let usuario_admin = this.activeroute.snapshot.paramMap.get('usuario');
    //let ced = Number(repartidor_usuario);
    this.api.putAdmin(form, usuario_admin).subscribe(data =>{
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
    this.router.navigate(['comercioAfiliado']);
  }

}
