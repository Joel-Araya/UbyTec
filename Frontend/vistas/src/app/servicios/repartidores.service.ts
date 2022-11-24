import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Datos } from '../editar-repartidor/datos.interface';
import { Repartidor } from '../repartidores/repartidores.model';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  constructor(private http:HttpClient) { }

  getRepartidores():  Observable<Repartidor[]>{
    let direccion = environment.apiUrl + "/Repartidores";
    return this.http.get<Repartidor[]>(direccion);
  }

  getUnRepartidor(usuario: any):Observable<Datos>{
    let direccion = environment.apiUrl + "/Repartidores/" + usuario;
    return this.http.get<Datos>(direccion)
  }

  putRepartidor(form:Datos, usuario:any):Observable<Datos>{
    let direccion = environment.apiUrl + "/Repartidores/" + usuario;
    return this.http.put<Datos>(direccion, form);
  }

  deleteRepartidor(form:Datos, usuario:any):Observable<Datos>{
    let direccion = environment.apiUrl + "/Repartidores/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form.usuario
    }
    return this.http.delete<Datos>(direccion, options);
  }

}
