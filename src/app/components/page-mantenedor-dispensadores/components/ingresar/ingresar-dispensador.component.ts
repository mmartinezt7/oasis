import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BuscarDispensador} from '../../../../model/buscar-dispensador';
import {ListarUbicacionesService} from '../../../../services/listas/listar-ubicaciones.service';
import {ListarEstadoDispensadorService} from '../../../../services/listas/listar-estado-dispensador.service';
import {ListarDispensadoresService} from '../../../../services/listas/listar-dispensadores.service';
import {ListarEstacionesDispensadorService} from '../../../../services/listas/listar-estaciones-dispensador.service';
import {CrearDispensadorService} from '../../../../services/dispensador-services/crear-dispensador.service';
import {CrearClienteService} from '../../../../services/crear-cliente.service';
import {CrearDispensadorController} from '../../../../model/crear-dispensador-controller';
import {MensajesService} from '../../../../services/mensajes.service';

@Component({
  selector: 'app-ingresar-dispensador',
  templateUrl: './ingresar-dispensador.component.html',
  styleUrls: ['./ingresar-dispensador.component.css'],
    providers: [ ListarDispensadoresService,
        ListarUbicacionesService,
        ListarEstacionesDispensadorService,
        ListarEstadoDispensadorService,
    CrearDispensadorService]
})
export class IngresarDispensadorComponent implements OnInit {
  public title: string;
  public modulo: string;
  public listar_tipos_dispensadores: any;
  public listar_ubicacion_dispensadores: any;
  public listar_estado_dispensador: any;
  public listar_estaciones_dispensador: any;
  constructor(
      private _ms: MensajesService,
      private _rt: Router,
      private _ld: ListarDispensadoresService,
      private _lu: ListarUbicacionesService,
      private _l_estaciones: ListarEstacionesDispensadorService,
      private _l_dispensador: ListarEstadoDispensadorService,
      private _crear_dispensador: CrearDispensadorService) {
    this.title = 'Ingresar dispensador';
    this.modulo = 'Mantenedor Dispensadores';
    this._lu.listarUbicacionesService().subscribe(resp2 => {
        this.listar_ubicacion_dispensadores = resp2.json().lst;
    });
    this._l_estaciones.listarEstacionesDispensadorService().subscribe( resp => {
      this.listar_estaciones_dispensador = resp.json().lst;
    });
    this._ld.listarTiposDispensadoresService().subscribe( res => {
      this.listar_tipos_dispensadores = res.json().lst;
    });
  }
    _formBuscarDispensador: BuscarDispensador = new BuscarDispensador();

  ngOnInit() {}

    goToHome() {
        this._rt.navigate(['home']);
    }

    guardarDispensador() {
        const crearDispensador = new CrearDispensadorController(
            this._formBuscarDispensador.trm,
            +this._formBuscarDispensador.td,
            +this._formBuscarDispensador.ide,
            +this._formBuscarDispensador.ub,
            this._formBuscarDispensador.ip_address,
            this._formBuscarDispensador.cm,
            this._formBuscarDispensador.ci,
            this._formBuscarDispensador.pa
            );
        this._crear_dispensador.crearDispensadorService(crearDispensador).subscribe(resp => {
          console.log(resp.json());
            if ('OK' === resp.json().status.toUpperCase()) {
                this._ms.showSuccess('Dispensador Creado', resp.json().glosa);
            } else {
                console.log('LOG: Error al buscar dispensador. Glosa: ' + resp.json().glosa);
                this._ms.showError('Error', resp.json().glosa);
            }
        }, err => {
            this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
        });
    }
}
