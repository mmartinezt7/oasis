import { ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginUsuarioComponent} from './components/page-login-usuario/page-login-usuario.component';
import {PageMantenedorClientesComponent} from './components/page-mantenedor-clientes/page-mantenedor-clientes.component';
import {PageMantenedorDispensadoresComponent} from './components/page-mantenedor-dispensadores/page-mantenedor-dispensadores.component';
import {PageMantenedorEnvasesComponent} from './components/page-mantenedor-envases/page-mantenedor-envases.component';
import {
    BuscarModificarEliminarComponent
} from './components/page-mantenedor-clientes/components/buscar-modificar-eliminar/buscar-modificar-eliminar.component';
import {IngresarClienteComponent} from './components/page-mantenedor-clientes/components/ingresar-cliente/ingresar-cliente.component';
import {
    BuscarModificarDispensadorComponent
} from './components/page-mantenedor-dispensadores/components/buscar-modificar/buscar-modificar-dispensador.component';
import {IngresarDispensadorComponent} from './components/page-mantenedor-dispensadores/components/ingresar/ingresar-dispensador.component';
import {BuscaModificarEnvaseComponent} from './components/page-mantenedor-envases/components/busca-modificar-envase/busca-modificar-envase.component';
import {IngresarEnvaseComponent} from './components/page-mantenedor-envases/components/ingresar-envase/ingresar-envase.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './app.auth-guard';
import {BienvenidaComponent} from './components/bienvenida/bienvenida.component';
import {PageSolicitarNuevaClaveComponent} from './components/page-solicitar-nueva-clave/page-solicitar-nueva-clave.component';
import {PageNuevaClaveComponent} from './components/page-nueva-clave/page-nueva-clave.component';

const appRoutes: Routes = [
    /*{path: '', component: PageLoginUsuarioComponent},
    {path: '**', component: PageLoginUsuarioComponent},*/
    {path: 'login', component: PageLoginUsuarioComponent},
    {path: 'recovery', component: PageSolicitarNuevaClaveComponent},
    {path: 'cambiarClave', component: PageNuevaClaveComponent},
    {path: 'home', component: HomeComponent, canActivate : [AuthGuard], children : [
            {path: '', component: BienvenidaComponent},
            {path: 'mantenedorClientes', component: PageMantenedorClientesComponent},
            {path: 'buscarCliente', component: BuscarModificarEliminarComponent},
            {path: 'registrarCliente', component: IngresarClienteComponent},
            {path: 'mantenedorDispensadores', component: PageMantenedorDispensadoresComponent},
            {path: 'mantenedorEnvases', component: PageMantenedorEnvasesComponent},
            {path: 'buscarDispensador', component: BuscarModificarDispensadorComponent},
            {path: 'registrarDispensador', component: IngresarDispensadorComponent},
            {path: 'buscarEnvase', component: BuscaModificarEnvaseComponent},
            {path: 'registrarEnvase', component: IngresarEnvaseComponent},
            {path: 'buscarEnvases', component: BuscaModificarEnvaseComponent},
            {path: 'registrarEnvases', component: IngresarEnvaseComponent}
        ]}
  ]
;

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
