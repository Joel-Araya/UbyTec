import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminComercioAfiliado } from '../admin-comercio-afiliado/admin-comercio-afiliado.model';
import { datosAdminAfi } from '../editar-admin-comercio-afi/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminComercioAfiService {

  constructor(private http: HttpClient) { }

  getAdmins():  Observable<AdminComercioAfiliado[]>{
    let direccion = environment.apiUrl + "/Administradores_Afiliados";
    return this.http.get<AdminComercioAfiliado[]>(direccion);
  }

  getUnAdmin(usuario: any):Observable<datosAdminAfi>{
    let direccion = environment.apiUrl + "/Administradores_Afiliados/" + usuario;
    return this.http.get<datosAdminAfi>(direccion)
  }

  putAdmin(form:datosAdminAfi, usuario:any):Observable<datosAdminAfi>{
    let direccion = environment.apiUrl + "/Administradores_Afiliados/" + usuario;
    return this.http.put<datosAdminAfi>(direccion, form);
  }

  deleteAdmin(form:datosAdminAfi, usuario:any):Observable<datosAdminAfi>{
    let direccion = environment.apiUrl + "/Administradores_Afiliados/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    console.log(usuario);
    console.log(direccion);
    return this.http.delete<datosAdminAfi>(direccion);
  }

  postAdmin(form:datosAdminAfi):Observable<datosAdminAfi>{
    let direccion = environment.apiUrl + "/Administradores_Afiliados";
    return this.http.post<datosAdminAfi>(direccion, form);

  }
}

