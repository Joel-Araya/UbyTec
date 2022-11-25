import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComercioAfiService } from '../servicios/admin-comercio-afi.service';
import { AdminComercioAfiliado } from './admin-comercio-afiliado.model';

@Component({
  selector: 'app-admin-comercio-afiliado',
  templateUrl: './admin-comercio-afiliado.component.html',
  styleUrls: ['./admin-comercio-afiliado.component.css']
})
export class AdminComercioAfiliadoComponent implements OnInit {

  adminsAfi:AdminComercioAfiliado[]=[];

  constructor(private api:AdminComercioAfiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAdmins().subscribe(data =>{
      this.adminsAfi = data;
    })
  }

  editarAdminAfiliado(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarAdminComerAfi', usuario]);
  }

  nuevoAdminAfiliado(){
    this.router.navigate(['insertarAdminComerAfi']);
  }
}
