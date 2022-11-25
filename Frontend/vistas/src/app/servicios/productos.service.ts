import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { datosProducto } from '../editar-productos/datos.interface';
import { Producto } from '../productos/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getProductos():  Observable<Producto[]>{
    let direccion = environment.apiUrl + "/Productos";
    return this.http.get<Producto[]>(direccion);
  }

  getUnProducto(usuario: any):Observable<datosProducto>{
    let direccion = environment.apiUrl + "/Productos/" + usuario;
    return this.http.get<datosProducto>(direccion)
  }

  putProducto(form:datosProducto, usuario:any):Observable<datosProducto>{
    let direccion = environment.apiUrl + "/Productos/" + usuario;
    return this.http.put<datosProducto>(direccion, form);
  }

  deleteProducto(form:datosProducto, usuario:any):Observable<datosProducto>{
    let direccion = environment.apiUrl + "/Productos/" + usuario;
    let options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      body: form
    }
    return this.http.delete<datosProducto>(direccion, options);
  }

  postProducto(form:datosProducto):Observable<datosProducto>{
    let direccion = environment.apiUrl + "/Productos";
    return this.http.post<datosProducto>(direccion, form);

  }
}
