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

  private url:string="https://ubytecapi20221119172130.azurewebsites.net/repartidores"

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
      body: form
    }
    console.log(usuario);
    console.log(direccion);
    return this.http.delete<Datos>(direccion);
  }

  postRepartidor(form:Datos):Observable<Datos>{
    let direccion = environment.apiUrl + "/Repartidores";
    return this.http.post<Datos>(direccion, form);

  }

  delete(id: any):Observable<any>{
    let direccion = environment.apiUrl + "/Repartidores/" + id;
    return this.http.delete(direccion);
  }

}
