import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  @Output() disparador: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
