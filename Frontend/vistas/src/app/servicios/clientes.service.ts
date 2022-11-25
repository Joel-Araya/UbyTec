import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.model';
import { datosCliente } from '../editar-cliente/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes():  Observable<Cliente[]>{
    let direccion = environment.apiUrl + "/Clientes";
    return this.http.get<Cliente[]>(direccion);
  }

  getUnCliente(usuario: any):Observable<datosCliente>{
    let direccion = environment.apiUrl + "/Clientes/" + usuario;
    return this.http.get<datosCliente>(direccion)
  }

  putCliente(form:datosCliente, usuario:any):Observable<datosCliente>{
    let direccion = environment.apiUrl + "/Clientes/" + usuario;
    return this.http.put<datosCliente>(direccion, form);
  }

  deleteCliente(form:datosCliente, usuario:any):Observable<datosCliente>{
    let direccion = environment.apiUrl + "/Clientes/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    return this.http.delete<datosCliente>(direccion, options);
  }

  postCliente(form:datosCliente):Observable<datosCliente>{
    let direccion = environment.apiUrl + "/Clientes";
    return this.http.post<datosCliente>(direccion, form);

  }
}
