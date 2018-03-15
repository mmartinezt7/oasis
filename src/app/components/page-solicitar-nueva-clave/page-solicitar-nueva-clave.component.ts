import { Component, OnInit } from '@angular/core';
import {RecuperarClaveService} from '../../services/recuperar-clave.service';
import {Router} from '@angular/router';
import {MensajesService} from '../../services/mensajes.service';
import {FormRecuperarClave} from '../../model/form-recuperar-clave';
import {Login} from '../../model/login';

@Component({
  selector: 'app-page-solicitar-nueva-clave',
  templateUrl: './page-solicitar-nueva-clave.component.html',
  styleUrls: ['./page-solicitar-nueva-clave.component.css'],
  providers: [RecuperarClaveService]
})
export class PageSolicitarNuevaClaveComponent implements OnInit {

  _formRecuperar: FormRecuperarClave = new FormRecuperarClave();
  _formLogin: Login = new Login();
  constructor(private _ms: MensajesService, private _rc: RecuperarClaveService, private _rt: Router) { }

  recuperarClave() {
    const fn = this._formRecuperar.anio + '-' + this._formRecuperar.mes + '-' + this._formRecuperar.dia;
    this._rc.recuperarClaveService(this._formRecuperar.ema, this._formRecuperar.rut, fn).subscribe(res => {
        if ('OK' === res.json().status.toUpperCase()) {
          this._formLogin.setDi(this._formRecuperar.rut);
          this._formLogin.setEmail(this._formRecuperar.ema);
          this._rt.navigate(['cambiarClave']);
        } else {
          this._ms.showError('Error', res.json().glosa);
        }
      },
      err => {
        this._ms.showWarning('Error', 'En este momento no es posible realizar su solicitud');
      });
  }

  ngOnInit() {
  }
}
