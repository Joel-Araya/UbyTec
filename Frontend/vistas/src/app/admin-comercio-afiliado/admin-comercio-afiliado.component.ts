import { Component, OnInit } from '@angular/core';
import { AdminComercioAfiliado } from './admin-comercio-afiliado.model';

@Component({
  selector: 'app-admin-comercio-afiliado',
  templateUrl: './admin-comercio-afiliado.component.html',
  styleUrls: ['./admin-comercio-afiliado.component.css']
})
export class AdminComercioAfiliadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    debugger;
    this.adminComerAfiliados.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  adminComerAfiliados:AdminComercioAfiliado[]=[]

  agregaradminComerAfiliados(){
    let afiliados = new AdminComercioAfiliado(this.Nombre, this.Provincia, this.Canton, this.Distrito,
      this.Telefonos, this.Usuario, this.Password, this.IsEdit)
    this.adminComerAfiliados.push(afiliados)
  }
  
  Nombre:string="";
  Provincia:string="";
  Canton:string="";
  Distrito:string="";
  Telefonos:string="";
  Usuario:string="";
  Password:string="";
  IsEdit:boolean=false;
}
