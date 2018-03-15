export class Login {
  email: string;
  pwd: string;
  nm: string;
  pwd2: string;

  constructor() {
    this.email = '';
    this.pwd = '';
    this.nm = '';
    this.pwd2 = '';
  }

    getDi(): string {
        return localStorage.getItem('di');
    }

    setDi(rut: string) {
        localStorage.setItem('di', rut);
    }

    getNm() {
        return localStorage.getItem('nm');
    }

    setNm(nm: string) {
        localStorage.setItem('nm', nm);
    }

    getEmail(): string {
      return localStorage.getItem('ema');
    }

    setEmail(email: string) {
      localStorage.setItem('ema', email);
    }

    clearStorage() {
        localStorage.clear();
    }
}
