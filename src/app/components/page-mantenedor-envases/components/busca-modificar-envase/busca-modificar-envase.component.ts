import { Component, OnInit } from '@angular/core';
import {BuscarEnvaseClienteService} from '../../../../services/buscar-envase-cliente.service';
import {BuscarEnvaseCliente} from '../../../../model/buscar-envase-cliente';
import {MensajesService} from '../../../../services/mensajes.service';
import {BuscarEnvase} from '../../../../model/buscar-envase';
import {ModificarEnvaseController} from '../../../../model/modificar-envase-controller';

@Component({
  selector: 'app-busca-modificar-envase',
  templateUrl: './busca-modificar-envase.component.html',
  styleUrls: ['./busca-modificar-envase.component.css'],
  providers: [BuscarEnvaseClienteService]
})
export class BuscaModificarEnvaseComponent implements OnInit {

  public title: string;
  public modulo: string;
  public showButtons: boolean = false;
  public editInputs: boolean = false;
  public editbutton: boolean = false;
  public savebutton: boolean = false;
  public deletebutton: boolean = false;
  public listaRecargaEnvases: any = [];
  public listaConsumoEnvases: any = [];
  _formBuscarEnvase: BuscarEnvaseCliente = new BuscarEnvaseCliente();
  _formEnvase: BuscarEnvase = new BuscarEnvase();
  constructor(private _ec: BuscarEnvaseClienteService, private _ms: MensajesService) {
    this.title = 'Buscar Envase';
    this.modulo = 'Mantenedor Envases';
  }

  public buscarEnvase() {
    this._ec.buscarEnvaseClienteService(this._formBuscarEnvase).subscribe(conf => {
        if ('OK' === conf.json().status.toUpperCase()) {
            const arrfh = conf.json().adic2[0].fh.split('-');
            const arrfv = conf.json().adic2[0].fv.split('-');
          this._formEnvase.fechaHab = arrfh[2] + '-' + arrfh[1] + '-' + arrfh[0];
          this._formEnvase.fechaVig = arrfv[2] + '-' + arrfv[1] + '-' + arrfv[0];
          this._formEnvase.estado = conf.json().adic2[0].est;
          this._formEnvase.rut = conf.json().adic2[0].di;
          this._formEnvase.consumoTotal = conf.json().adic2[0].ca;
          this._formEnvase.trm = conf.json().adic2[0].trm;
          this.listarRecargaEnvases(this._formBuscarEnvase.env);
          this.listarConsumoEnvases(this._formBuscarEnvase.env);
          this.showButtons = true;
          this.deletebutton = true;
          this.editbutton = true;
          this.savebutton = false;
          this.editInputs = false;
        } else {
          this._ms.showError('Error', conf.json().glosa);
        }
      },
      conf => {
        this._ms.showWarning('Error', 'En este momento no es posible realizar su solicitud');
      });
  }

  listarRecargaEnvases(idEnvase: any) {
    this._ec.listarRecargaPorEnvases(idEnvase).subscribe(res => {
        if ('OK' === res.json().status.toUpperCase()) {
          for (let i = 0; i < res.json().adic2.length; i++) {
            this.listaRecargaEnvases[i] = res.json().adic2[i];
          }
        } else {
          this.listaRecargaEnvases[0] = {trm: 'Sin registros', can: '', fr: '', amt: ''};
        }
      },
      err => {
        this._ms.showWarning('Error', 'En este momento no es posible listar recargas por envases');
      });
  }

  listarConsumoEnvases(idEnvase: any) {
    this._ec.listarConsumoPorEnvases(idEnvase).subscribe(res => {
        if ('OK' === res.json().status.toUpperCase()) {
          for (let i = 0; i < res.json().adic2.length; i++) {
            this.listaConsumoEnvases[i] = res.json().adic2[i];
          }
        } else {
          this.listaConsumoEnvases[0] = {trm: 'Sin registros', fc: '', ccn: ''};
        }
      },
      err => {
        this._ms.showWarning('Error', 'En este momento no es posible listar consumos por envases');
      });
  }

  modificarEnvase() {
    this.editInputs = true;
    this.editbutton = false;
    this.savebutton = true;
  }

  eliminarEnvase() {
    this._ec.eliminarEnvaseService(this._formBuscarEnvase.env).subscribe( resp => {
      if ('OK' === resp.json().status.toUpperCase()) {
        this._ms.showSuccess('', 'Envase eliminado');
        this.limpiarformulario();
        this.deletebutton = false;
        this.editbutton = false;
      } else {
        this._ms.showError('Error', resp.json().glosa);
      }
    }, err => {
      this._ms.showWarning('Error', 'En este momento no es posible realizar esta solicitud');
    });
  }

  limpiarformulario() {
    this._formEnvase.fechaHab = '';
    this._formEnvase.fechaVig = '';
    this._formEnvase.estado = '0';
    this._formEnvase.rut = '';
    this._formEnvase.consumoTotal = '';
    // this.listaEnvases = [];
  }

    ngOnInit() {}

    guardarCambiosEnvase() {
    const arrfh = this._formEnvase.fechaHab.split('-');
    const arrfv = this._formEnvase.fechaVig.split('-');
    const modificarobj = new ModificarEnvaseController(
        this._formBuscarEnvase.env,
        this._formEnvase.trm,
        this._formEnvase.rut,
        arrfh[2] + '-' + arrfh[1] + '-' + arrfh[0],
        arrfv[2] + '-' + arrfv[1] + '-' + arrfv[0],
        +this._formEnvase.estado,
        +this._formEnvase.consumoTotal
    );
    this._ec.modificarEnvaseClienteService(modificarobj).subscribe(resp => {
        if ('OK' === resp.json().status.toUpperCase()) {
            this._ms.showSuccess('', 'Envase Modificado');
            this.limpiarformulario();
            this.deletebutton = false;
            this.editbutton = false;
            this.showButtons = false;
        } else {
            this._ms.showError('Error', resp.json().glosa);
            console.log(resp.json());
        }
    }, error2 => {
          this._ms.showWarning('Error', 'En este momento no es posible realizar esta solicitud');
        });
    }
}
