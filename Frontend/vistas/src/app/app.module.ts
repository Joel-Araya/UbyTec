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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CarritoProductsComponent } from './carrito-products/carrito-products.component';
import { CarritoHeaderComponent } from './carrito-header/carrito-header.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertarAdminComponent } from './insertar-admin/insertar-admin.component';
import { ObjToArray } from './objToArray.pipe';
import { InsertarRepartidorComponent } from './insertar-repartidor/insertar-repartidor.component';
import { EditarRepartidorComponent } from './editar-repartidor/editar-repartidor.component';




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
  {path: 'carrito', component:CarritoComponent},
  {path: 'header', component:CarritoHeaderComponent},
  {path: 'pro', component: CarritoProductsComponent},
  {path: 'editarRepartidor/:usuario', component: EditarRepartidorComponent},
  {path: 'insertarRepartidor', component:InsertarRepartidorComponent},

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
    CarritoProductsComponent,
    CarritoHeaderComponent,
    InsertarAdminComponent,
    ObjToArray,
    InsertarRepartidorComponent,
    EditarRepartidorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
