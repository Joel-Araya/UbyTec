import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Repartidor } from './repartidores.model';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css'],
})
export class RepartidoresComponent implements OnInit {

  /* usersArray = [
    {
      "id": 1,
      "nombre": "Leanne Graham",
      "provincia": "Bret",
      "canton": "Sincere@april.biz",
      "distrito": "1-770-736-8031 x56442",
      "telefonos": "hildegard.org",
      "usuario": "abcd",
      "password": "4598",
      "isEdit": false
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net", 
      "isEdit": false
    },
  ] */

  onEdit(item: any) {
    debugger;
    this.repartidores.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  constructor() { }

  ngOnInit(): void {

  }

  repartidores:Repartidor[]=[
    new Repartidor("Gustavo Zamora", "Alajuela", "Zarcero", "Alfaro Ruiz", "86837404", "gaze10", "bc", false)
  ]

  agregarRepartidor(){

    let repartidor = new Repartidor(this.Nombre, this.Provincia, this.Canton, this.Distrito, this.Telefonos, this.Usuario, this.Password, false);
    this.repartidores.push(repartidor);
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
