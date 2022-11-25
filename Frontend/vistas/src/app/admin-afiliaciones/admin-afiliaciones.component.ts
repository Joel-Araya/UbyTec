import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AfiliadosService } from '../servicios/afiliados.service';
import { SolicitudService } from '../servicios/solicitud.service';
import { AdminAfiliacion } from './admin-afiliaciones.model';

@Component({
  selector: 'app-admin-afiliaciones',
  templateUrl: './admin-afiliaciones.component.html',
  styleUrls: ['./admin-afiliaciones.component.css']
})
export class AdminAfiliacionesComponent implements OnInit {

  solicitudes:AdminAfiliacion[]=[];

  constructor(private api:AfiliadosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getSolicitudes().subscribe(data =>{
      this.solicitudes = data;
    })
  }

  /**
   * Método que nos permite editar un pedido
   * @param usuario 
   */
  administrar(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['aceptarRechazar', usuario]);
  }


}
