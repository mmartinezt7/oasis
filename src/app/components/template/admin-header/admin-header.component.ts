import { Component, OnInit } from '@angular/core';
import {Login} from '../../../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
    public nombre_usuario: string;
  constructor(private _formLogin: Login,  private _rt: Router) {
      this.nombre_usuario = this._formLogin.getNm();
  }
  ngOnInit() {}
    cerrarSesion() {
        window.location.reload();
        this._formLogin.clearStorage();
        this._rt.navigate(['login']);
    }

    goToHome() {
        this._rt.navigate(['home']);
    }
}

