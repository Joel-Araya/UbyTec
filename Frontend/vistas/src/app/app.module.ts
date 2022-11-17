import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MenuVistaAdminComponent } from './menu-vista-admin/menu-vista-admin.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { MenuVistaAfiliadoComponent } from './menu-vista-afiliado/menu-vista-afiliado.component';
import { MenuVistaClienteComponent } from './menu-vista-cliente/menu-vista-cliente.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';
import { AdminComercioAfiliadoComponent } from './admin-comercio-afiliado/admin-comercio-afiliado.component';
import { AdminAfiliacionesComponent } from './admin-afiliaciones/admin-afiliaciones.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SolicitudAfiliacionComponent } from './solicitud-afiliacion/solicitud-afiliacion.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AsignacionPedidosComponent } from './asignacion-pedidos/asignacion-pedidos.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoComponent } from './carrito/carrito.component';




const appRoutes:Routes=[
  {path: '', component:LoginComponent},
  {path: 'menuAdmin', component:MenuVistaAdminComponent},
  {path: 'menuAfiliados', component:MenuVistaAfiliadoComponent},
  {path: 'menuCliente', component:MenuVistaClienteComponent},
  {path: 'admins', component:AdministradoresComponent},
  {path: 'afiliados', component:AfiliadosComponent},
  {path: 'repartidores', component:RepartidoresComponent},
  {path: 'comercioAfiliado', component:AdminComercioAfiliadoComponent},
  {path: 'adminAfiliaciones', component:AdminAfiliacionesComponent},
  {path: 'solicitud', component:SolicitudAfiliacionComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'pedidos', component:PedidosComponent},
  {path: 'asignacion', component:AsignacionPedidosComponent},
  {path: 'cliente', component:ClienteComponent},
  {path: 'crearCuenta', component:CrearCuentaComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'crearCuentaCliente', component:CrearClienteComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AdministradoresComponent,
    AfiliadosComponent,
    RepartidoresComponent,
    AdminComercioAfiliadoComponent,
    AdminAfiliacionesComponent,
    LoginComponent,
    SolicitudAfiliacionComponent,
    ProductosComponent,
    PedidosComponent,
    AsignacionPedidosComponent,
    ClienteComponent,
    CrearCuentaComponent,
    FeedbackComponent,
    CrearClienteComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
