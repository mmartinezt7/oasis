import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Login} from './model/login';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public _formLogin: Login, public _rt: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this._formLogin.getDi() === null) {
            this._rt.navigate(['login']);
            return Observable.of(false);
        } else {
            return Observable.of(true);
        }
    }


}