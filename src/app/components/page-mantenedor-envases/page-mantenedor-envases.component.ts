import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-mantenedor-envases',
  templateUrl: './page-mantenedor-envases.component.html',
  styleUrls: ['./page-mantenedor-envases.component.css'],
})
export class PageMantenedorEnvasesComponent implements OnInit {

  constructor(private _formLogin: Login, private _rt: Router  ) { }

  ngOnInit() {
      if (this._formLogin.getDi() === null) {
          this._rt.navigate(['login']);
      }
  }

}
