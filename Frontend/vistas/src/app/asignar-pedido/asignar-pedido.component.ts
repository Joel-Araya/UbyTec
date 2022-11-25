import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';
import { datosAsigPedidos } from './datos.interface';

@Component({
  selector: 'app-asignar-pedido',
  templateUrl: './asignar-pedido.component.html',
  styleUrls: ['./asignar-pedido.component.css']
})
export class AsignarPedidoComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:PedidosService) { }

  datosAsignacion!:datosAsigPedidos;
  editarForm = new FormGroup({
    comprobante: new FormControl('', {nonNullable: true}),
    estado: new FormControl('',{nonNullable: true}),
    c_cedula: new FormControl('',{nonNullable: true}),
    re_usuario: new FormControl('',{nonNullable: true}),
    provincia: new FormControl('',{nonNullable: true}),
    canton: new FormControl('',{nonNullable: true}),
    distrito: new FormControl('',{nonNullable: true}),
  });


  ngOnInit(): void {
    let comprobante = this.activeroute.snapshot.paramMap.get('comprobante');
    
    
    /* this.api.getUnAsignacionPedidos(comprobante).subscribe(data =>{
      this.datosAsignacion = data;
      this.editarForm.setValue({
        'comprobante': comprobante!,
        'estado': this.datosAsignacion.estado!,
        'c_cedula': this.datosAsignacion.c_cedula!,
        're_usuario': this.datosAsignacion.re_usuario!,
        'provincia': this.datosAsignacion.provincia!,
        'canton': this.datosAsignacion.canton!,
        'distrito': this.datosAsignacion.distrito!,
      });
    }) */
  }

  /* postForm(form:datosAsignacion){
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('comprobante');
    this.api.putAsignacion(form, repartidor_usuario).subscribe(data =>{
      console.log(data);
    });
  } */

}
