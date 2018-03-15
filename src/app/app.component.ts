import {Component, OnDestroy, OnInit} from '@angular/core';
import {Login} from './model/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app works!';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    login: boolean = this._formLogin.getDi() === null ? false : true;

    constructor(private _formLogin: Login) {
    }
    ngOnInit() {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
        this.body.classList.add('oasis');
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

}
