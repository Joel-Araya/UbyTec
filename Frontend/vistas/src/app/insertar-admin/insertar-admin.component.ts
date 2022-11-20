import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Administrador } from '../administradores/admins.model';
import { AdminsService } from '../servicios/admins.service';

@Component({
  selector: 'app-insertar-admin',
  templateUrl: './insertar-admin.component.html',
  styleUrls: ['./insertar-admin.component.css']
})
export class InsertarAdminComponent implements OnInit {

  @Input() empleado?: Administrador;
  @Output() empleadosActualizados = new EventEmitter<Administrador[]>();

  constructor(private empleadoService: AdminsService) { }

  ngOnInit(): void {
    
  }

  actualizarAdministrador(empleado:Administrador){
    this.empleadoService
    .actualizarEmpleados(empleado)
    .subscribe((empleados: Administrador[]) => this.empleadosActualizados.emit(empleados));
  }

  borrarAdministrador(empleado:Administrador){
    this.empleadoService
    .borrarEmpleados(empleado)
    .subscribe((empleados: Administrador[]) => this.empleadosActualizados.emit(empleados));
  }

  agregarAdministrador(empleado:Administrador){
    this.empleadoService
    .agregarEmpleados(empleado)
    .subscribe((empleados: Administrador[]) => this.empleadosActualizados.emit(empleados));
  }


}
