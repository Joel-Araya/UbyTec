import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { comerciosCercanos } from '../menu-vista-cliente/menu.model';

@Injectable({
  providedIn: 'root'
})
export class ComercioCercanoService {

  constructor(private http: HttpClient) { }

  getComercioAfiliados():  Observable<comerciosCercanos[]>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados";
    return this.http.get<comerciosCercanos[]>(direccion);
  }
}

