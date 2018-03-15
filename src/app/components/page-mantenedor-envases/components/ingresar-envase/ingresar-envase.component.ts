import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BuscarDispensadorService} from '../../../../services/dispensador-services/buscar-dispensador.service';
import {MensajesService} from '../../../../services/mensajes.service';
import {BuscarEnvaseClienteService} from '../../../../services/buscar-envase-cliente.service';

@Component({
  selector: 'app-ingresar-envase',
  templateUrl: './ingresar-envase.component.html',
  styleUrls: ['./ingresar-envase.component.css'],
  providers: [BuscarDispensadorService, BuscarEnvaseClienteService]
})
export class IngresarEnvaseComponent implements OnInit {

    public title: string;
    public modulo: string;
    public listaDispensadores: any = [];
    public listaEnvases: any = [];
    public envasesNoProcesados: any = [];
    _idDispensador: any = null;
    public resultado = true;
    constructor(private _rt: Router, private _bdc: BuscarDispensadorService, private _ms: MensajesService, private _ec: BuscarEnvaseClienteService) {
        this.title = 'Buscar Envase';
        this.modulo = 'Registrar Envases';
    }

  ngOnInit() {
    this.listarDispensadores();
  }

  listarDispensadores() {
    this._bdc._buscarDispensadorService().subscribe( resp => {
      if ('OK' === resp.json().status.toUpperCase()) {
        for (let i = 0; i < resp.json().adic2.length; i++) {
          this.listaDispensadores[i] = resp.json().adic2[i];
        }
      } else {
        this._ms.showError('Error', resp.json().glosa);
      }
    }, err => {
      this._ms.showWarning('Error', 'En este momento no es posible listar dispensadores');
    });
  }

  cargarEnvases() {
      let j = 0;
    for (let i = 0; i < this.listaEnvases.length; i++) {
      this._ec.cargarEnvasesService(this._idDispensador, this.listaEnvases[i].trim()).subscribe(resp => {
        if ('NOTOK' === resp.json().status.toUpperCase()) {
          this.resultado = false;
          this.envasesNoProcesados[j++] = this.listaEnvases[i];
        }
      }, err => {
        this.resultado = false;
        this.envasesNoProcesados[j++] = this.listaEnvases[i];
      });
    }
    if (this.resultado === true) {
      this._ms.showSuccess('', 'Todos los envases fueron registrados');
    } else {
      this._ms.showError('Error', 'Los siguientes envases no pudieron ser registrados \n' + this.envasesNoProcesados);
    }
  }

  setTextFile(textFile: any) {
      this.listaEnvases = textFile.split('\n');
  }

  fileUpload(event) {
    let reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = res => {
      this.setTextFile(reader.result);
    }
  }

  goToHome() {
    this._rt.navigate(['home']);
  }

}
