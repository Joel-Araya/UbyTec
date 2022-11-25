import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadosService } from '../servicios/afiliados.service';
import { comerciosCercanos } from './comercios-cercanos.model';

@Component({
  selector: 'app-comercios-cercanos',
  templateUrl: './comercios-cercanos.component.html',
  styleUrls: ['./comercios-cercanos.component.css']
})
export class ComerciosCercanosComponent implements OnInit {

  comercios:comerciosCercanos[]=[];

  /**
   * Método constructor, se le inyecta el servicio de afiliado
   * @param api 
   * @param router 
   */
  constructor(private api:AfiliadosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAfiliados().subscribe(data =>{
      this.comercios = data;
    })
  }

  /**
   * Método que nos dirige al afiliado que se desea editar
   * @param usuario 
   */
  editarAfiliado(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['proComercios', usuario]);
  }

  /**
   * Método que nos dirige al afiliado que se desea editar
   */
  nuevoAfiliado(){
    this.router.navigate(['insertarAfiliado']);
  }

}
