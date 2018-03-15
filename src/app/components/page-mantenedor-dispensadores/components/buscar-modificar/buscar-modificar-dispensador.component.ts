import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BuscarDispensadorService} from '../../../../services/dispensador-services/buscar-dispensador.service';
import {MensajesService} from '../../../../services/mensajes.service';
import {BuscarDispensadorController} from '../../../../model/buscar-dispensador-controller';
import {BuscarDispensador} from '../../../../model/buscar-dispensador';
import {ListarDispensadoresService} from '../../../../services/listas/listar-dispensadores.service';
import {ListarUbicacionesService} from '../../../../services/listas/listar-ubicaciones.service';
import {ListarEstacionesDispensadorService} from '../../../../services/listas/listar-estaciones-dispensador.service';
import {ListarEstadoDispensadorService} from '../../../../services/listas/listar-estado-dispensador.service';
import {EliminarDispensadorService} from '../../../../services/dispensador-services/eliminar-dispensador.service';
import {CrearDispensadorService} from '../../../../services/dispensador-services/crear-dispensador.service';
import {CrearDispensadorController} from '../../../../model/crear-dispensador-controller';
import {ModificarDispensadorController} from '../../../../model/modificar-dispensador-controller';
import {ModificarDispensadorService} from '../../../../services/dispensador-services/modificar-dispensador.service';

@Component({
  selector: 'app-buscar-modificar',
  templateUrl: './buscar-modificar-dispensador.component.html',
  styleUrls: ['./buscar-modificar-dispensador.component.css'],
  providers: [
      BuscarDispensadorService,
      ListarDispensadoresService,
      ListarUbicacionesService,
      ListarEstacionesDispensadorService,
      ListarEstadoDispensadorService,
      EliminarDispensadorService,
      ModificarDispensadorService]
})
export class BuscarModificarDispensadorComponent implements OnInit {
  public title: string;
  public modulo: string;
  public showresult: boolean;
  public update: boolean;
  public listar_tipos_dispensadores: any;
  public listar_ubicacion_dispensadores: any;
  public listar_estado_dispensador: any;
  public listar_estaciones_dispensador: any;
  constructor(
      private _rt: Router,
      private _bdc: BuscarDispensadorService,
      private _ms: MensajesService,
      private _ld: ListarDispensadoresService,
      private _lu: ListarUbicacionesService,
      private _l_estaciones: ListarEstacionesDispensadorService,
      private _l_dispensador: ListarEstadoDispensadorService,
      private _ed: EliminarDispensadorService,
      private _md: ModificarDispensadorService) {
    this.title = 'Buscar Dispensador';
    this.modulo = 'Mantenedor Dispensadores';
    this.showresult = false;
    this.update = false;
  }
  _formBuscarDispensador: BuscarDispensador = new BuscarDispensador();
  ngOnInit() {}

    goToHome() {
        this._rt.navigate(['home']);
    }

    buscarDatosDispensador() {
      if (this._formBuscarDispensador.trm !== '') {
          const buscarDispensador = new BuscarDispensadorController(
              this._formBuscarDispensador.trm);
          this._bdc.buscarDispensadorService(buscarDispensador).subscribe( resp => {
              if ('OK' === resp.json().status.toUpperCase()) {
                  const arrfh = resp.json().adic2[0].fh.split('-');
                  const arrfm = resp.json().adic2[0].fm.split('-');
                  this.showresult = true;
                  this._formBuscarDispensador.ip_address = resp.json().adic2[0].ip;
                  this._formBuscarDispensador.gtd = resp.json().adic2[0].gtd;
                  this._formBuscarDispensador.cm = resp.json().adic2[0].cm;
                  this._formBuscarDispensador.ub = resp.json().adic2[0].ub;
                  this._formBuscarDispensador.ide = resp.json().adic2[0].ide;
                  this._formBuscarDispensador.ci = resp.json().adic2[0].ci;
                  this._formBuscarDispensador.pa = resp.json().adic2[0].pa;
                  this._formBuscarDispensador.fh = arrfh[2] + '-' + arrfh[1] + '-'  + arrfh[0];
                  this._formBuscarDispensador.fm = arrfm[2] + '-' + arrfm[1] + '-'  + arrfm[0];
                  this._formBuscarDispensador.cnd = resp.json().adic2[0].cnd;
                  this._formBuscarDispensador.est = resp.json().adic2[0].est;
                  this._formBuscarDispensador.gle = resp.json().adic2[0].gle;
                  this._formBuscarDispensador.glu = resp.json().adic2[0].glu;
                  this._formBuscarDispensador.ges = resp.json().adic2[0].ges;
                  this._formBuscarDispensador.td = resp.json().adic2[0].td;
                  this._formBuscarDispensador.cnd = resp.json().adic2[0].cnd;
              } else {
                  console.log('LOG: Error al buscar dispensador. Glosa: ' + resp.json().glosa);
                  this._ms.showError('Error', resp.json().glosa);
              }
          }, err => {
              this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
          });
      } else {
          this._ms.showWarning( 'Aviso', 'Identificador de Dispensador no puede ser vac&#xcd;o' );
      }
    }
    buttonUpdate() {
        this.update = true;
        console.log('esperando tipos dispensadores...');
        this._ld.listarTiposDispensadoresService().subscribe(resp1 => {
          this.listar_tipos_dispensadores = resp1.json().lst;
            console.log('%c ok tipos', 'color: #088A08');
        });
        console.log('esperando ubicaciones dispensadores...');
        this._lu.listarUbicacionesService().subscribe(resp2 => {
          this.listar_ubicacion_dispensadores = resp2.json().lst;
            console.log('%c ok ubicaciones', 'color: #088A08');
        });
        console.log('esperando estaciones dispensadores...');
        this._l_estaciones.listarEstacionesDispensadorService().subscribe(resp3 => {
          this.listar_estaciones_dispensador = resp3.json().lst;
            console.log('%c ok estaciones', 'color: #088A08');
        });
        console.log('esperando estado dispensadores...');
        this._l_dispensador.listarEstadoDispensadorService().subscribe( resp4 => {
          this.listar_estado_dispensador = resp4.json().lst;
            console.log('%c ok estado', 'color: #088A08');
        });
    }

    buttonSave() {
        const arrfh = this._formBuscarDispensador.fh.split('-');
        const arrfm = this._formBuscarDispensador.fm.split('-');
        const modificar_dispensador = new ModificarDispensadorController(
            this._formBuscarDispensador.trm,
            +this._formBuscarDispensador.td,
            +this._formBuscarDispensador.ide,
            +this._formBuscarDispensador.ub,
            this._formBuscarDispensador.ip_address,
            this._formBuscarDispensador.cm,
            this._formBuscarDispensador.ci,
            this._formBuscarDispensador.pa,
            +this._formBuscarDispensador.est,
            arrfh[2] + '-' + arrfh[1] + '-'  + arrfh[0],
            arrfm[2] + '-' + arrfm[1] + '-'  + arrfm[0],
            +this._formBuscarDispensador.stk,
            +this._formBuscarDispensador.cnd.slice(0, -2)
        );

        this._md.modificarDispensadorService(modificar_dispensador).subscribe(resp => {
            if ('OK' === resp.json().status.toUpperCase()) {
                this._ms.showSuccess('Dispensador Creado', resp.json().glosa);
                this.update = false;
                this.showresult = false;
            } else {
                this._ms.showError('ERROR', resp.json().glosa);
            }
        }, err => {
            this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
        });
  }

    buttonDelete() {
      const buscarDispensador = new BuscarDispensadorController(
      this._formBuscarDispensador.trm);
      this._ed.eliminarDispensadorService(buscarDispensador).subscribe(resp => {
        if ('OK' === resp.json().status.toUpperCase()) {
            this._ms.showSuccess('Dispensador Eliminado', resp.json().glosa);
            this.update = false;
        } else {
            this._ms.showError('ERROR', resp.json().glosa);
        }
      }, err => {
          this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
      });
    }
}
