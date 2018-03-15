export class BuscarEnvaseClienteController {
    di: string;
    trm: string;
    env: string;

    constructor(di: string, trm: string, env: string) {
        this.di = di;
        this.trm = trm;
        this.env = env;
    }
}
