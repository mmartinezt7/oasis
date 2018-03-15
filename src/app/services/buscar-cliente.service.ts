import { Injectable } from '@angular/core';
import {AppConfig} from '../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BuscarClienteController} from '../model/buscar-cliente-controller';

@Injectable()
export class BuscarClienteService {
    private _buscarClienteEndPoint = AppConfig.API_ENDPOINT_BUSCAR_CLIENTE;
  constructor(private _http: Http) { }

    public buscarClienteService(consulta: BuscarClienteController): Observable<Response> {
        return this._http.post(this._buscarClienteEndPoint, consulta, this.getOptions());
    }
    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }
}
