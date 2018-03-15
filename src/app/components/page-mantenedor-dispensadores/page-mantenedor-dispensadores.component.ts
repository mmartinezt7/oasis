import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-mantenedor-dispensadores',
  templateUrl: './page-mantenedor-dispensadores.component.html',
  styleUrls: ['./page-mantenedor-dispensadores.component.css'],
})
export class PageMantenedorDispensadoresComponent implements OnInit {
    public title: string;
    public modulo: string;
  constructor(private _formLogin: Login, private _rt: Router  ) {
      this.title = '';
      this.modulo = '';
  }

  ngOnInit() {
      if (this._formLogin.getDi() === null) {
          this._rt.navigate(['login']);
      }
  }

}
