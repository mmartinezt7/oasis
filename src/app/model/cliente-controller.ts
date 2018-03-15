export class ClienteController {
  nm: string;
  ap: string;
  di: string;
  sx: string;
  fn: string;
  em: string;
  pw: string;
  ad: number;
  constructor(nombres: string, apellidos: string, rut: string, sexo: string, anio: string, mes: string, dia: string, correo: string, contrasena: string) {
    this.nm = nombres;
    this.ap = apellidos;
    this.di = rut;
    if ('1' === sexo) {
      this.sx = 'F';
    } else {
      this.sx = 'M';
    }
    this.fn =  anio + '-' + mes + '-' + dia;
    this.em = correo;
    this.pw = contrasena;
    this.ad = 0;
  }
}
