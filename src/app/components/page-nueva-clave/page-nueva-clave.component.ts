import { Component, OnInit } from '@angular/core';
import {MensajesService} from '../../services/mensajes.service';
import {Login} from '../../model/login';
import {CambiarClaveService} from '../../services/cambiar-clave.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-nueva-clave',
  templateUrl: './page-nueva-clave.component.html',
  styleUrls: ['./page-nueva-clave.component.css'],
  providers: [CambiarClaveService]
})
export class PageNuevaClaveComponent implements OnInit {

  _formLogin: Login = new Login();
  constructor(private _ms: MensajesService, private _cc: CambiarClaveService, private _rt: Router) { }

  cambiarClave() {
    if (this._formLogin.pwd === this._formLogin.pwd2) {
      this._cc.cambiarClaveService(this._formLogin.getDi(), this._formLogin.getEmail(), this._formLogin.pwd).subscribe(res => {
          if ('OK' === res.json().status.toUpperCase()) {
            this._ms.showSuccess('', 'Clave cambiada exitosamente');
            this._rt.navigate(['login']);
          } else {
            this._ms.showError('Error', res.json().glosa);
          }
        },
        err => {
          this._ms.showWarning('Error', 'En este momento no es posible realizar su solicitud');
        });
    } else {
      this._ms.showError('Error', 'Claves no coinciden');
    }
  }

  ngOnInit() {
    if (this._formLogin.getDi() === null || this._formLogin.getEmail() === null) {
      this._rt.navigate(['recovery']);
    }
  }
}
