import { Injectable } from '@angular/core';
import {AppConfig} from '../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BuscarEnvaseClienteController} from '../model/buscar-envase-cliente-controller';
import {ModificarEnvaseController} from '../model/modificar-envase-controller';

@Injectable()
export class BuscarEnvaseClienteService {

  private _buscarEnvaseClienteEndPoint = AppConfig.API_ENDPOINT_BUSCAR_ENVASE_CLIENTE;
  private _eliminarEnvaseEndPoint = AppConfig.API_ENDPOINT_ELIMINAR_ENVASE;
  private _recargasPorEnvaseEndPoint = AppConfig.API_ENDPOINT_RECARGAS_ENVASE;
  private _consumosPorEnvaseEndPoint = AppConfig.API_ENDPOINT_CONSUMOS_ENVASE;
  private _cargarEnvaseEndPoint = AppConfig.API_ENDPOINT_CARGAR_ENVASES;
  private _modificarEnvaseEndPoint = AppConfig.API_ENDPOINT_MODIFICAR_ENVASES;

  constructor(private _http: Http) { }


  public modificarEnvaseClienteService(consulta: ModificarEnvaseController): Observable<Response> {
    return this._http.post(this._modificarEnvaseEndPoint, consulta, this.getOptions());
  }
  public buscarEnvaseClienteService(consulta: BuscarEnvaseClienteController): Observable<Response> {
      return this._http.post(this._buscarEnvaseClienteEndPoint, consulta, this.getOptions());
  }

  public eliminarEnvaseService(idEnvase: any): Observable<Response> {
    return this._http.post(this._eliminarEnvaseEndPoint, {env: idEnvase}, this.getOptions());
  }

  public listarRecargaPorEnvases(idEnvase: any): Observable<Response> {
    return this._http.post(this._recargasPorEnvaseEndPoint, {env: idEnvase}, this.getOptions());
  }

  public listarConsumoPorEnvases(idEnvase: any): Observable<Response> {
    return this._http.post(this._consumosPorEnvaseEndPoint, {env: idEnvase}, this.getOptions());
  }

  public cargarEnvasesService(idDispensador: any, idEnvase: any): Observable<Response> {
    return this._http.post(this._cargarEnvaseEndPoint, {trm: idDispensador, env: idEnvase}, this.getOptions());
  }

  private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
  }
}

