import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComercioCercanoService } from '../servicios/comercio-cercano.service';
import { comerciosCercanos } from './menu.model';

@Component({
  selector: 'app-menu-vista-cliente',
  templateUrl: './menu-vista-cliente.component.html',
  styleUrls: ['./menu-vista-cliente.component.css']
})
export class MenuVistaClienteComponent implements OnInit {

  comercios:comerciosCercanos[]=[];

  constructor(private api:ComercioCercanoService, private router:Router) { }

  ngOnInit(): void {

  }

}
