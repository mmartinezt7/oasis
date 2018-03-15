import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {Login} from '../../model/login';
import {MensajesService} from '../../services/mensajes.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-page-login-usuario',
  templateUrl: './page-login-usuario.component.html',
  styleUrls: ['./page-login-usuario.component.css'],
  providers: [LoginService]
})
export class PageLoginUsuarioComponent implements OnInit {

  constructor(private toastyService: ToastyService, private _lg: LoginService, private _ms: MensajesService, private _rt: Router) {
  }
  _formLogin: Login = new Login();
  loginCustomerService() {
    this._lg.loginCustomer(this._formLogin).subscribe(res => {
        console.log(res.json());
        if ('OK' === res.json().status.toUpperCase()) {
          // window.location.reload();
          this._formLogin.setDi(res.json().adic1.toUpperCase());
          this._formLogin.setNm(res.json().glosa);
          this._rt.navigate(['home']);
        } else {
          this._ms.showError('Error', res.json().glosa);
        }
      },
      err => {
        console.log(err.json());
        this._ms.showWarning('Error', 'En este momento no es posible realizar su solicitud');
      });
  }

  ngOnInit() {
  }

}
