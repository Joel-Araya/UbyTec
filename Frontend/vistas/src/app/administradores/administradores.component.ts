import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminsService } from '../servicios/admins.service';
import { Administrador } from './admins.model';
import { InsertarAdminComponent } from '../insertar-admin/insertar-admin.component';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  @Input() cedula?: Administrador;
  admin:Administrador[]=[];
  adminAEditar?:Administrador;

  isEdit:boolean=false;
  ced?:number;

  enableEdit = false;
  enableEditIndex = null;


  @Input() empleado?: Administrador;
  @Output() empleadosActualizados = new EventEmitter<Administrador[]>()

  constructor(private adminService: AdminsService) { }

  ngOnInit(): void {
    this.adminService
    .getEmpleados()
    .subscribe((result: Administrador[]) => (this.admin = result));
  }

  listaActualizada(admin: Administrador[]){
    this.admin = admin;
  }

  crearAdministrador(){
    this.adminAEditar = new Administrador();
    
  }

  editAdministrador(trabajadores: Administrador){
    this.adminAEditar = trabajadores;
  }
  onEdit(item: any) {
    /* debugger;
    console.log(item);
    this.admin.forEach(element => {

        this.isEdit=false;
            
    });
    this.isEdit = true;
    this.ced = item.cedula; */
    debugger;
    this.admin.forEach(element => {
      if(element.cedula!=this.cedula){
        this.isEdit=false;
      }
      
    });
    this.isEdit=true;
    
    /* debugger;
    this.usersArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true; */
  
  }

  actualizarAdministrador(empleado:Administrador){
    this.adminService
    .actualizarEmpleados(empleado)
    .subscribe((empleados: Administrador[]) => this.empleadosActualizados.emit(empleados));
    console.log(this.empleado);
  }

  /* agregarAdmin(){

    let admin = new Administrador(this.Cedula, this.Nombre, this.Provincia, this.Canton, this.Distrito, this.Telefonos, this.Usuario, this.Password, this.IsEdit);
    this.admins.push(admin);
  } */

  /* Cedula:number=0;
  Nombre:string="";
  Provincia:string="";
  Canton:string="";
  Distrito:string="";
  Telefonos:string="";
  Usuario:string="";
  Password:string="";
  IsEdit:boolean=false; */


}
