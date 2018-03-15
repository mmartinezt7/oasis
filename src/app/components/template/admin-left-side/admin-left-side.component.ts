import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Login} from '../../../model/login';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
  public nombre_usuario: string;
    constructor(private _formLogin: Login) {
        this.nombre_usuario = this._formLogin.getNm();
    }

  ngOnInit() {
  }

}
