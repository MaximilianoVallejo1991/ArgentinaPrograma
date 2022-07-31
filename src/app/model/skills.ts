export class Skills {
    id?: number;
    nombreS: string;
    porcentajeS: string;
    urlS: string;
    fotoS: Blob;

    constructor(nombreS: string, porcentajeS: string, urlS: string, fotosS:Blob){
        this.nombreS = nombreS;
        this.porcentajeS = porcentajeS;
        this.urlS = urlS;
        this.fotoS = fotosS;
    }
} 