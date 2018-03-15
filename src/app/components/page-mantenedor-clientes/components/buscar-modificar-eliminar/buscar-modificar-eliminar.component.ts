import { Component, OnInit } from '@angular/core';
import {BuscarClienteController} from '../../../../model/buscar-cliente-controller';
import {BuscarEnvaseClienteController} from '../../../../model/buscar-envase-cliente-controller';
import {BuscarClienteService} from '../../../../services/buscar-cliente.service';
import {BuscarEnvaseClienteService} from '../../../../services/buscar-envase-cliente.service';
import {EliminarClienteService} from '../../../../services/eliminar-cliente.service';
import {BuscarEnvaseCliente} from '../../../../model/buscar-envase-cliente';
import {BuscarCliente} from '../../../../model/buscar-cliente';
import {MensajesService} from '../../../../services/mensajes.service';
import {ModificarClienteService} from '../../../../services/modificar-cliente.service';
import {ModificarClienteController} from '../../../../model/modificar-cliente-controller';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar-modificar-eliminar',
  templateUrl: './buscar-modificar-eliminar.component.html',
  styleUrls: ['./buscar-modificar-eliminar.component.css'],
  providers: [BuscarEnvaseClienteService, BuscarClienteService, EliminarClienteService, ModificarClienteService]
})
export class BuscarModificarEliminarComponent implements OnInit {
    public title: string;
    public modulo: string;
  constructor(private _bec: BuscarEnvaseClienteService,
              private _bc: BuscarClienteService,
              private _ec: EliminarClienteService,
              private _ms: MensajesService,
              private _mc: ModificarClienteService,
              private _rt: Router) {
      this.title = 'Buscar Cliente';
      this.modulo = 'Mantenedor Cliente';
  }
    _formBuscarEnvaseCliente: BuscarEnvaseCliente = new BuscarEnvaseCliente();
    _formBuscarCliente: BuscarCliente = new BuscarCliente();
    public listaEnvases: any = [];
    public showButtons: boolean = false;
    public editInputs: boolean = false;
    public editbutton: boolean = true;
    public savebutton: boolean = false;
    public  arr_estados_cliente: any = [
        {id : 0, glosa : 'Inactivo'},
        {id : 1, glosa : 'Activo'},
        {id : 2, glosa : 'Desactivado'},
        {id : 3, glosa : 'Bloqueado'}
    ];


    buscarDatosCliente() {
        if (this._formBuscarEnvaseCliente.di !== '') {
            const resultadoBusquedaEnvase = this.buscarEnvaseCliente();
            const resultadoBusquedaCliente = this.buscarCliente();
            resultadoBusquedaCliente.subscribe(resultado_ciente => {
                if ('OK' === resultado_ciente.json().status.toUpperCase()) {
                    console.log('Estado de cliente: ' + resultado_ciente.json().adic2[0].est);
                    // datos de cliente
                    this._formBuscarCliente.nombre = resultado_ciente.json().adic2[0].nm;
                    this._formBuscarCliente.apellido = resultado_ciente.json().adic2[0].ap;
                    this._formBuscarCliente.email = resultado_ciente.json().adic2[0].em;
                    this._formBuscarCliente.estado = resultado_ciente.json().adic2[0].est;
                    this._formBuscarCliente.ge = resultado_ciente.json().adic2[0].ge;
                    this.showButtons = true;
                    // this._ms.showSuccess('Cliente Encontrado Exitosamente', resultado_ciente.json().glosa);
                    resultadoBusquedaEnvase.subscribe(resultado_envase => {
                        if ('OK' === resultado_envase.json().status.toUpperCase()) {
                            // lista envases
                            for (let i = 0; i < resultado_envase.json().adic2.length; i++) {
                                this.listaEnvases[i] = resultado_envase.json().adic2[i];
                            }
                        } else {
                            console.log('LOG: Error al consultar Envases de Cliente. Glosa: ' + resultado_envase.json().glosa);
                            this._ms.showWarning('Aviso', 'Cliente no registra envases');
                            // this.showButtons = false;
                        }
                    }, err => {
                        this._ms.showWarning('Error', 'En este momento no es posible realizar su consulta');
                    });
                } else {
                    console.log('LOG: Error al consultar cliente. Glosa: ' + resultado_ciente.json().glosa);
                    this._ms.showError('Error', resultado_ciente.json().glosa);
                    this._formBuscarEnvaseCliente.di = '';
                }
            }, err => {
                this._ms.showWarning('Error', 'En este momento no es posible realizar su consulta');
            });
        } else {
            this._ms.showWarning('Error', 'Rut/Pasaporte no puede ser vacío');
        }
    }
    buscarEnvaseCliente(): any {
        const buscarEnvaseCliente = new BuscarEnvaseClienteController(
            this._formBuscarEnvaseCliente.di, '', '');
        return this._bec.buscarEnvaseClienteService(buscarEnvaseCliente);
    }
    buscarCliente(): any {
        const buscarCliente = new BuscarClienteController(this._formBuscarEnvaseCliente.di);
        return this._bc.buscarClienteService(buscarCliente);
    }
    eliminarCliente() {
        const buscarCliente = new BuscarClienteController(this._formBuscarEnvaseCliente.di);
        this._ec.eliminarClienteService(buscarCliente).subscribe( resp => {
            if ('OK' === resp.json().status.toUpperCase()) {
                this._ms.showSuccess('Cliente Eliminado Correctamente', resp.json().glosa);
                this.limpiarformulario();
                this.showButtons = false;
            } else {
                console.log('LOG: Error al consultar cliente. Glosa: ' + resp.json().glosa);
                this._ms.showError('Error', resp.json().glosa);
            }
        }, err => {
            this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
        });
    }
    limpiarformulario() {
        this._formBuscarCliente.nombre = '';
        this._formBuscarCliente.apellido = '';
        this._formBuscarCliente.email = '';
        this.listaEnvases = [];
    }
    modificarCliente() {
        this.editInputs = true;
        this.editbutton = false;
        this.savebutton = true;
    }
    guardarCambiosCliente() {
        const buscarCliente = new ModificarClienteController(
            this._formBuscarEnvaseCliente.di,
            this._formBuscarCliente.nombre,
            this._formBuscarCliente.apellido,
            this._formBuscarCliente.email,
            this._formBuscarCliente.estado);
        this._mc.modificarClienteService(buscarCliente).subscribe( resp => {
            console.log(resp.json());
            if ('OK' === resp.json().status.toUpperCase()) {
                this._ms.showSuccess('Cliente Modificado Correctamente', resp.json().glosa);
                this.showButtons = false;
            } else {
                console.log('LOG: Error al modificar cliente. Glosa: ' + resp.json().glosa);
                this._ms.showError('Error', resp.json().glosa);
            }
            console.log(resp.json());
        }, err => {
            this._ms.showWarning('Error', 'En este momento no es posible realizar esta operación');
        });
    }
  ngOnInit() {
  }

  goToHome() {
      this._rt.navigate(['home']);
  }

}
