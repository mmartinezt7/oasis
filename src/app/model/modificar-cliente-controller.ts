export class ModificarClienteController {
    di: string;
    nm: string;
    ap: string;
    em: string;
    est: string;

    constructor(di: string, nm: string, ap: string, em: string, est: string) {
        this.di = di;
        this.nm = nm;
        this.ap = ap;
        this.em = em;
        this.est = est;
    }
}
