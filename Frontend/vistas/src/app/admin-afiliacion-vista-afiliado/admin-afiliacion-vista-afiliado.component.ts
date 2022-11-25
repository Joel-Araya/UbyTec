import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComercioAfiliado } from '../admin-comercio-afiliado/admin-comercio-afiliado.model';
import { AdminComercioAfiService } from '../servicios/admin-comercio-afi.service';

@Component({
  selector: 'app-admin-afiliacion-vista-afiliado',
  templateUrl: './admin-afiliacion-vista-afiliado.component.html',
  styleUrls: ['./admin-afiliacion-vista-afiliado.component.css']
})
export class AdminAfiliacionVistaAfiliadoComponent implements OnInit {

  adminsAfi:AdminComercioAfiliado[]=[];

  /**
   * Método constructor, se le inyecta el servicio de administradores afiliados
   * @param api 
   * @param router 
   */
  constructor(private api:AdminComercioAfiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAdmins().subscribe(data =>{
      this.adminsAfi = data;
    })
  }

  /**
   * Método que nos lleva al Administrador afiliado que se desea editar
   * @param usuario 
   */
  editarAdminAfiliado(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarAdminComerAfi', usuario]);
  }

  /**
   * Método que nos dirige a donde se inserta un Administrador afiliado
   */
  nuevoAdminAfiliado(){
    this.router.navigate(['insertarAdminComerAfi']);
  }

}
