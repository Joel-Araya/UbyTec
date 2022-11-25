import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from '../editar-repartidor/datos.interface';
import { RepartidoresService } from '../servicios/repartidores.service';

@Component({
  selector: 'app-eliminar-repartidor',
  templateUrl: './eliminar-repartidor.component.html',
  styleUrls: ['./eliminar-repartidor.component.css']
})
export class EliminarRepartidorComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private api:RepartidoresService) { }

  datosRepartidor!:Datos;
  eliminarForm = new FormGroup({
    usuario: new FormControl('', {nonNullable: true}),
  });

  ngOnInit(): void {
    let repartidor_usuario = this.activeroute.snapshot.paramMap.get('usuario');
    
    /* console.log(repartidor_usuario); */
    this.api.getUnRepartidor(repartidor_usuario).subscribe(data =>{
      this.datosRepartidor = data;
      this.eliminarForm.setValue({
        'usuario': repartidor_usuario!,
      });

    })
  }


}
