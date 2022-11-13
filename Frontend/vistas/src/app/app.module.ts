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



const appRoutes:Routes=[
  {path: '', component:LoginComponent},
  {path: 'menuAdmin', component:MenuVistaAdminComponent},
  {path: 'menuAfiliados', component:MenuVistaAfiliadoComponent},
  {path: 'menuCliente', component:MenuVistaClienteComponent},
  {path: 'admins', component:AdministradoresComponent},
  {path: 'afiliados', component:AfiliadosComponent},
  {path: 'repartidores', component:RepartidoresComponent},
  {path: 'comercioAfiliado', component:AdminComercioAfiliadoComponent},
  {path: 'adminAfiliaciones', component:AdminAfiliacionesComponent}
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
