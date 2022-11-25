import { Injectable } from '@angular/core';
import { LoginI } from '../login/login.interface';
import { ResponseI } from '../login/reponse.interface';
import{HttpClient, HttpHeaders}from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = "https://ubytecapi20221119172130.azurewebsites.net/"
  
  constructor(private http:HttpClient) { }

  loginByEmailEmpleado(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "Empleados/Login/" + form.usuario
    return this.http.get<ResponseI>(direccion)  
  }

  loginByEmailCliente(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "Clientes/Login/" + form.usuario
    return this.http.get<ResponseI>(direccion)
  }

  loginByEmailAfiliado(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "Administradores_Afiliados/Login/" + form.usuario
    return this.http.get<ResponseI>(direccion)
  }

}
