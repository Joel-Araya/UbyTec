import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminAfiliacion } from '../admin-afiliaciones/admin-afiliaciones.model';
import { Afiliado } from '../afiliados/afiliados.model';
import { datosAfiliado } from '../editar-afiliado/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  constructor(private http: HttpClient) { }

  getAfiliados():  Observable<Afiliado[]>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados";
    return this.http.get<Afiliado[]>(direccion);
  }

  getUnAfiliado(usuario: any):Observable<datosAfiliado>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados/" + usuario;
    return this.http.get<datosAfiliado>(direccion)
  }

  putAfiliado(form:datosAfiliado, usuario:any):Observable<datosAfiliado>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados/" + usuario;
    return this.http.put<datosAfiliado>(direccion, form);
  }

  deleteAfiliado(form:datosAfiliado, usuario:any):Observable<datosAfiliado>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    console.log(usuario);
    console.log(direccion);
    return this.http.delete<datosAfiliado>(direccion);
  }

  postAfiliado(form:datosAfiliado):Observable<datosAfiliado>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados";
    return this.http.post<datosAfiliado>(direccion, form);

  }

  getSolicitudes():Observable<AdminAfiliacion[]>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados/EnEspera";
    return this.http.get<AdminAfiliacion[]>(direccion);
  }

  getUnaSolicitud(usuario: any):Observable<AdminAfiliacion>{
  let direccion = environment.apiUrl + "/Comercios_Afiliados/" + usuario;
    return this.http.get<AdminAfiliacion>(direccion);
  }

  putSolicitud(form:datosAfiliado, cedula:any):Observable<datosAfiliado>{
    let direccion = environment.apiUrl + "/Comercios_Afiliados/" + cedula;
    return this.http.put<datosAfiliado>(direccion, form);
  }
}
