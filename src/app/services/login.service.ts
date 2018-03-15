import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../app-config';

@Injectable()
export class LoginService {

  private _loginEndPoint = AppConfig.API_ENDPOINT_LOGIN_CLIENTE

  constructor(private _http: Http) { }
  public loginCustomer(login: any): Observable<Response> {
    return this._http.post(this._loginEndPoint, {em: login.email, pwd: login.pwd}, this.getOptions());
  }
  private getOptions() {
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return new RequestOptions({headers: headers});
  }
}
