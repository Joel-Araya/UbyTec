import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';
import { Asignacion } from './asignacion.model';

@Component({
  selector: 'app-asignacion-pedidos',
  templateUrl: './asignacion-pedidos.component.html',
  styleUrls: ['./asignacion-pedidos.component.css']
})
export class AsignacionPedidosComponent implements OnInit {

  asignaciones:Asignacion[]=[];

  /**
   * Método constructor, se le inyecta el servicio de pedidos
   * @param api 
   * @param router 
   */
  constructor(private api:PedidosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAsignacionPedidos().subscribe(data =>{
      this.asignaciones = data;
    })
  }

  /**
   * Método utilizado para que nos envíe a la pantalla de asignar pedido
   * @param usuario 
   */
  AsignarPedido(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['asignarPedido', usuario]);
  }

}
