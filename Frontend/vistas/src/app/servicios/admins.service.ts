import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from '../administradores/admins.model';
import { datosAdmin } from '../editar-admin/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  getAdministradores():  Observable<Administrador[]>{
    let direccion = environment.apiUrl + "/Empleados";
    return this.http.get<Administrador[]>(direccion);
  }

  getUnAdministrador(usuario: any):Observable<datosAdmin>{
    let direccion = environment.apiUrl + "/Empleados/" + usuario;
    return this.http.get<datosAdmin>(direccion)
  }

  putAdministrador(form:datosAdmin, usuario:any):Observable<datosAdmin>{
    let direccion = environment.apiUrl + "/Empleados/" + usuario;
    return this.http.put<datosAdmin>(direccion, form);
  }

  deleteAdministrador(form:datosAdmin, usuario:any):Observable<datosAdmin>{
    let direccion = environment.apiUrl + "/Empleados/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    console.log(usuario);
    console.log(direccion);
    return this.http.delete<datosAdmin>(direccion);
  }

  postAdministrador(form:datosAdmin):Observable<datosAdmin>{
    let direccion = environment.apiUrl + "/Empleados";
    return this.http.post<datosAdmin>(direccion, form);

  }

  delete(id: any):Observable<any>{
    let direccion = environment.apiUrl + "/Empleados/" + id;
    return this.http.delete(direccion);
  }
}
