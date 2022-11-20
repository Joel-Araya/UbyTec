import { Component, OnInit } from '@angular/core';
import { Afiliado } from './afiliados.model';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    debugger;
    this.afiliados.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  afiliados:Afiliado[]=[]

  agregarAfiliado(){
    let afiliados = new Afiliado(this.Cedula, this.NombreComercio, this.TipoComercio, this.Provincia, this.Canton, this.Distrito,
       this.Telefonos, this.Correo, this.NumSinpe, this.Admin, this.IsEdit)
    this.afiliados.push(afiliados)
  }

  Cedula:number=0;
  NombreComercio:string="";
  TipoComercio:string="";
  Provincia:string="";
  Canton:string="";
  Distrito:string="";
  Telefonos:string="";
  Correo:string="";
  NumSinpe:string="";
  Admin:string="";
  IsEdit:boolean=false;
}
