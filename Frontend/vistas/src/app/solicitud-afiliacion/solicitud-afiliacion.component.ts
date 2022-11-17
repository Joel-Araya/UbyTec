import { Component, Input, OnInit } from '@angular/core';
import { SolicitudService } from '../servicios/solicitud.service';

@Component({
  selector: 'app-solicitud-afiliacion',
  templateUrl: './solicitud-afiliacion.component.html',
  styleUrls: ['./solicitud-afiliacion.component.css']
})
export class SolicitudAfiliacionComponent implements OnInit {
  @Input() datos:any;

  constructor(private solicitud:SolicitudService) { }

  ngOnInit(): void {
  }

  enviarSolicitud(){
    /* console.log(this.datos); */
    this.solicitud.disparador.emit({
      data:this.datos
    })
    console.log("enviado");
  }
}
