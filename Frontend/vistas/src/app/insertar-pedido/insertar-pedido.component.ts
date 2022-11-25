import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { datosPedido } from '../editar-pedido/datos.interface';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-insertar-pedido',
  templateUrl: './insertar-pedido.component.html',
  styleUrls: ['./insertar-pedido.component.css']
})
export class InsertarPedidoComponent implements OnInit {

  nuevoForm = new FormGroup({
    comprobante: new FormControl('', {nonNullable: true}),
    estado: new FormControl('', {nonNullable: true}),   
    c_cedula: new FormControl('', {nonNullable: true}),
    re_usuario: new FormControl('', {nonNullable: true}),
    provincia: new FormControl('', {nonNullable: true}),
    canton: new FormControl('', {nonNullable: true}),
    distrito: new FormControl('', {nonNullable: true}),
  });

  constructor(private api:PedidosService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Método para insertar un nuevo pedido
   * @param form 
   */
  postForm(form:datosPedido){
    this.api.postPedido(form).subscribe(data =>{
      console.log(data)
    })
  }

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['pedidos']);
  }

}
