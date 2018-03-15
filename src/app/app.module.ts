import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app-routing';

import { AppComponent } from './app.component';
import { PageMantenedorClientesComponent } from './components/page-mantenedor-clientes/page-mantenedor-clientes.component';
import { PageMantenedorEnvasesComponent } from './components/page-mantenedor-envases/page-mantenedor-envases.component';
import { PageMantenedorDispensadoresComponent } from './components/page-mantenedor-dispensadores/page-mantenedor-dispensadores.component';
import { PageLoginUsuarioComponent } from './components/page-login-usuario/page-login-usuario.component';

import {MensajesService} from './services/mensajes.service';
import {ToastyModule} from 'ng2-toasty';
import { BuscarModificarEliminarComponent } from './components/page-mantenedor-clientes/components/buscar-modificar-eliminar/buscar-modificar-eliminar.component';
import { IngresarClienteComponent } from './components/page-mantenedor-clientes/components/ingresar-cliente/ingresar-cliente.component';
import {Login} from './model/login';
import {AdminHeaderComponent} from './components/template/admin-header/admin-header.component';
import {AdminFooterComponent} from './components/template/admin-footer/admin-footer.component';
import {AdminLeftSideComponent} from './components/template/admin-left-side/admin-left-side.component';
import {
    BuscarModificarDispensadorComponent
} from './components/page-mantenedor-dispensadores/components/buscar-modificar/buscar-modificar-dispensador.component';
import { IngresarDispensadorComponent } from './components/page-mantenedor-dispensadores/components/ingresar/ingresar-dispensador.component';
import { BuscaModificarEnvaseComponent } from './components/page-mantenedor-envases/components/busca-modificar-envase/busca-modificar-envase.component';
import { IngresarEnvaseComponent } from './components/page-mantenedor-envases/components/ingresar-envase/ingresar-envase.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from './app.auth-guard';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import {PageSolicitarNuevaClaveComponent} from './components/page-solicitar-nueva-clave/page-solicitar-nueva-clave.component';
import {PageNuevaClaveComponent} from './components/page-nueva-clave/page-nueva-clave.component';



@NgModule({
  declarations: [
    AppComponent,
    PageMantenedorClientesComponent,
    PageMantenedorEnvasesComponent,
    PageMantenedorDispensadoresComponent,
    PageLoginUsuarioComponent,
    BuscarModificarEliminarComponent,
    IngresarClienteComponent,
      AdminHeaderComponent,
      AdminFooterComponent,
      AdminLeftSideComponent,
      BuscarModificarDispensadorComponent,
      IngresarDispensadorComponent,
      BuscaModificarEnvaseComponent,
      IngresarEnvaseComponent,
      HomeComponent,
      PageSolicitarNuevaClaveComponent,
      PageNuevaClaveComponent,
      BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ToastyModule.forRoot()
  ],
  providers: [MensajesService, appRoutingProviders, Login, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
