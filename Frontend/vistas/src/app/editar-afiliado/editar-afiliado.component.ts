import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AfiliadosService } from '../servicios/afiliados.service';
import { datosAfiliado } from './datos.interface';

@Component({
  selector: 'app-editar-afiliado',
  templateUrl: './editar-afiliado.component.html',
  styleUrls: ['./editar-afiliado.component.css']
})
export class EditarAfiliadoComponent implements OnInit {

  @Input() usuario?: datosAfiliado;
  @Output() datosActualizados = new EventEmitter<datosAfiliado[]>();

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:AfiliadosService) { }

  datosAfiliado!:datosAfiliado;
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
    this.api.getUnAfiliado(cedula).subscribe(data =>{
      this.datosAfiliado = data;
      this.editarForm.setValue({
        'cedula': cedula!,
        'tipo_comercio': this.datosAfiliado.tipo_comercio!,
        'nombre_comercio': this.datosAfiliado.nombre_comercio!,
        'num_sinpe': this.datosAfiliado.num_sinpe!,
        'administrador_comercio': this.datosAfiliado.administrador_comercio!,
        'correo': this.datosAfiliado.correo!,
        'provincia':  this.datosAfiliado.provincia!,
        'canton':  this.datosAfiliado.canton!,
        'distrito':  this.datosAfiliado.distrito!,
        'a_usuario': this.datosAfiliado.a_usuario!,
        'estado' : this.datosAfiliado.estado!,
      });
      /* console.log(this.editarForm.value); */
    })
  }

  postForm(form:datosAfiliado){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('cedula');
    //let ced = Number(repartidor_usuario);
    this.api.putAfiliado(form, repartidor_usuario).subscribe(data =>{
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
    this.router.navigate(['afiliados']);
  }

}
