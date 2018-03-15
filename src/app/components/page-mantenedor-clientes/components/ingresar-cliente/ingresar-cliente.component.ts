import { Component, OnInit } from '@angular/core';
import {ClienteController} from '../../../../model/cliente-controller';
import {CrearClienteService} from '../../../../services/crear-cliente.service';
import {ConfirmarClienteService} from '../../../../services/confirmar-cliente.service';
import {MensajesService} from '../../../../services/mensajes.service';
import {Cliente} from '../../../../model/cliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.css'],
  providers: [CrearClienteService, ConfirmarClienteService]
})

export class IngresarClienteComponent implements OnInit {
    public title: string;
    public modulo: string;
  constructor( private _cs: CrearClienteService,
               private _ms: MensajesService,
               private _cc: ConfirmarClienteService,
               private _rt: Router) {
      this.title = 'Registar Cliente';
      this.modulo = 'Mantenedor Cliente';
  }
    _formCliente: Cliente = new Cliente();


    crearCliente() {
        const clienteController = new ClienteController(
            this._formCliente.nm,
            this._formCliente.ap,
            this._formCliente.di,
            this._formCliente.sx,
            this._formCliente.anio,
            this._formCliente.mes,
            this._formCliente.dia,
            this._formCliente.em,
            this._formCliente.pw);
        this._cs.crearClienteService(clienteController).subscribe(res => {
                console.log(res.json());
                if ('OK' === res.json().status.toUpperCase()) {
                    console.log('LOG: Cliente Registrado Correctamente. Glosa: ' + res.json().glosa );
                    this._formCliente.hash = res.json().adic1;
                    // Se realiza confirmacion de cliente a traves del siguiente servicio
                    this._cc.confirmarClienteService(this._formCliente).subscribe(conf => {
                            if ('OK' === conf.json().status.toUpperCase()) {
                                this._ms.showSuccess('', 'Cliente Resgitrado Exitosamente');
                                this._ms.showSuccess('', conf.json().glosa);
                            } else {
                                this._ms.showError('Error', conf.json().glosa);
                            }
                        },
                        conf => {
                            this._ms.showWarning('Error', 'En este momento no es posible realizar su registro');
                        });
                } else {
                    console.log('LOG: Error al crear el cliente. Glosa: ' + res.json().glosa);
                    this._ms.showError('Error', res.json().glosa);
                }
            },
            err => {
                this._ms.showWarning('Error', 'En este momento no es posible realizar su registro');
            });
    }

  ngOnInit() {
  }

    goToHome() {
        this._rt.navigate(['home']);
    }


}
