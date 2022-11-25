import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidos } from '../pedidos/pedidos.model';
import { PedidosService } from '../servicios/pedidos.service';
import { ProductosService } from '../servicios/productos.service';
import { datosPedido } from './datos.interface';
import { ProductosPedidos } from './datos2.interface';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  propedidos:ProductosPedidos[]=[];

  constructor(private api:PedidosService, private router:Router, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let comprobante = this.activeroute.snapshot.paramMap.get('comprobante');
    this.api.getProdPedidos(comprobante).subscribe(data =>{
      this.propedidos = data;
    })
  }

  /**
   * Método que nos lleva a la pantalla para editar el Pedido que se requiera
   * @param usuario 
   */
  editarPedido(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarPedido', usuario]);
  }

  /**
   * Método para salir
   */
  salir(){
    this.router.navigate(['pedidos']);
  }

}
