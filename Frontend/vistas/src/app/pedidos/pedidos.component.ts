import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';
import { Pedidos } from './pedidos.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:Pedidos[]=[];

  constructor(private api:PedidosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getPedidos().subscribe(data =>{
      this.pedidos = data;
    })
  }

  /**
   * Método que nos permite editar un pedido
   * @param usuario 
   */
  editarPedido(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarPedido', usuario]);
  }

  /**
   * Método que nos permite insertar un pedido
   */
  nuevoPedido(){
    this.router.navigate(['insertarPedido']);
  }
}
