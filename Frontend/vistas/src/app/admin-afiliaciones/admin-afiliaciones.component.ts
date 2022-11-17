import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { SolicitudService } from '../servicios/solicitud.service';

@Component({
  selector: 'app-admin-afiliaciones',
  templateUrl: './admin-afiliaciones.component.html',
  styleUrls: ['./admin-afiliaciones.component.css']
})
export class AdminAfiliacionesComponent implements OnInit {

  constructor(private solicitud:SolicitudService) { }

  public listaNot:Array<any>=[]

  ngOnInit(): void {
    this.solicitud.disparador.subscribe(data => {
      console.log("Recibiendo..",data);
      this.listaNot.push(data);
    })
  }

}
