import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { RepartidoresService } from '../servicios/repartidores.service';
import { Repartidor } from './repartidores.model';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css'],
})
export class RepartidoresComponent implements OnInit {

  repartidores:Repartidor[]=[];

  constructor(private api:RepartidoresService, private router:Router) { }

  ngOnInit(): void {
    this.api.getRepartidores().subscribe(data =>{
      this.repartidores = data;
    })
  }

  editarRepartidor(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarRepartidor', usuario]);
  }

  nuevoRepartidor(){
    this.router.navigate(['insertarRepartidor']);
  }

}
