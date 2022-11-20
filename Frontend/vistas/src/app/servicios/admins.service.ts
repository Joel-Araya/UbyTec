import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from '../administradores/admins.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  private url = "Empleados"

  constructor(private http: HttpClient) { }

  public getEmpleados() : Observable<Administrador[]> {
    return this.http.get<Administrador[]>(`${environment.apiUrl}/${this.url}`)
  }

  public actualizarEmpleados(empleado: Administrador) : Observable<Administrador[]> {
    return this.http.put<Administrador[]>(`${environment.apiUrl}/${this.url}`,
    empleado);
  }

  public agregarEmpleados(empleado: Administrador) : Observable<Administrador[]> {
    return this.http.post<Administrador[]>(`${environment.apiUrl}/${this.url}`,
    empleado);

  }

  public borrarEmpleados(cliente: Administrador) : Observable<Administrador[]> {
    return this.http.delete<Administrador[]>(
      `${environment.apiUrl}/${this.url}/${cliente.cedula}`);

  }
}
