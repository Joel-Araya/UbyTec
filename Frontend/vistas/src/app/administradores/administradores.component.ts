import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminsService } from '../servicios/admins.service';
import { Administrador } from './admins.model';
import { InsertarAdminComponent } from '../insertar-admin/insertar-admin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  administradores:Administrador[]=[];

  constructor(private api:AdminsService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAdministradores().subscribe(data =>{
      this.administradores = data;
    })
  }

  editarAdmin(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarAdmin', usuario]);
  }

  nuevoAdmin(){
    this.router.navigate(['insertarAdmin']);
  }

}
