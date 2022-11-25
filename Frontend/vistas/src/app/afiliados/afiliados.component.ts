import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadosService } from '../servicios/afiliados.service';
import { Afiliado } from './afiliados.model';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {

  afiliados:Afiliado[]=[];

  constructor(private api:AfiliadosService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAfiliados().subscribe(data =>{
      this.afiliados = data;
    })
  }

  editarAfiliado(usuario: any){
    /* console.log(usuario) */
    this.router.navigate(['editarAfiliado', usuario]);
  }

  nuevoAfiliado(){
    this.router.navigate(['insertarAfiliado']);
  }
}
