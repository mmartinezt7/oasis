import { Component, OnInit } from '@angular/core';
import {CrearClienteService} from '../../services/crear-cliente.service';
import {MensajesService} from '../../services/mensajes.service';
import {Cliente} from '../../model/cliente';
import {ClienteController} from '../../model/cliente-controller';
import {ConfirmarClienteService} from '../../services/confirmar-cliente.service';
import {Router} from '@angular/router';
import {Login} from '../../model/login';

@Component({
  selector: 'app-page-mantenedor-clientes',
  templateUrl: './page-mantenedor-clientes.component.html',
  styleUrls: ['./page-mantenedor-clientes.component.css']
})
export class PageMantenedorClientesComponent implements OnInit {
    constructor(private _formLogin: Login, private _rt: Router) { }

    ngOnInit() {
      if (this._formLogin.getDi() === null) {
          this._rt.navigate(['login']);
      }
    }
}
