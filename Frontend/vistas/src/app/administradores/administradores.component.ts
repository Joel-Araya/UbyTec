import { Component, OnInit } from '@angular/core';
import { Administrador } from './admins.model';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  admins:Administrador[]=[
    new Administrador(207860865, "Gustavo Zamora", "Alajuela", "Zarcero", "Alfaro Ruiz", "86837404", "gaze10", "bc")
  ]

  agregarAdmin(){

    let admin = new Administrador(this.Cedula, this.Nombre, this.Provincia, this.Canton, this.Distrito, this.Telefonos, this.Usuario, this.Password);
    this.admins.push(admin);
  }

  Cedula:number=0;
  Nombre:string="";
  Provincia:string="";
  Canton:string="";
  Distrito:string="";
  Telefonos:string="";
  Usuario:string="";
  Password:string="";

}
