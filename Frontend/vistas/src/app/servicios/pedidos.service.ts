import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asignacion } from '../asignacion-pedidos/asignacion.model';
import { datosPedido } from '../editar-pedido/datos.interface';
import { Pedidos } from '../pedidos/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  getPedidos():  Observable<Pedidos[]>{
    let direccion = environment.apiUrl + "/Pedidos";
    return this.http.get<Pedidos[]>(direccion);
  }

  getUnPedido(usuario: any):Observable<datosPedido>{
    let direccion = environment.apiUrl + "/Pedidos/" + usuario;
    return this.http.get<datosPedido>(direccion)
  }

  getProdPedidos(usuario:any): Observable<Pedidos[]>{
    let direccion = environment.apiUrl + "/ProductosPedidos/" + usuario;
    return this.http.get<Pedidos[]>(direccion);
  }

  getAsignacionPedidos(): Observable<Asignacion[]>{
    let direccion = environment.apiUrl + "/Pedidos/Preparando";
    return this.http.get<Asignacion[]>(direccion);
  }

  getUnAsignacionPedidos(usuario:any): Observable<Asignacion[]>{
    let direccion = environment.apiUrl + "/Pedidos/Preparando/" + usuario;
    return this.http.get<Asignacion[]>(direccion);
  }
  
  putPedido(form:datosPedido, usuario:any):Observable<datosPedido>{
    let direccion = environment.apiUrl + "/Pedidos/" + usuario;
    return this.http.put<datosPedido>(direccion, form);
  }

  deletePedido(form:datosPedido, usuario:any):Observable<datosPedido>{
    let direccion = environment.apiUrl + "/Pedidos/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    return this.http.delete<datosPedido>(direccion, options);
  }

  postPedido(form:datosPedido):Observable<datosPedido>{
    let direccion = environment.apiUrl + "/Pedidos";
    return this.http.post<datosPedido>(direccion, form);

  }
}
