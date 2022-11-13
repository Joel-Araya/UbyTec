export class Afiliado{

    constructor(cedula:number, nombreComercio:string, tipoComercio:string, provincia:string, canton:string, distrito:string, telefonos:string, correo:string, numSinpe:string, admin:string){

        this.cedula = cedula;
        this.nombreComercio = nombreComercio;
        this.tipoComercio = tipoComercio;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.telefonos = telefonos;
        this.correo = correo;
        this.numSinpe = numSinpe;
        this.admin = admin;
    }

    cedula?:number;
    nombreComercio:string="";
    tipoComercio:string="";
    provincia:string="";
    canton:string="";
    distrito:string="";
    telefonos:string="";
    correo:string="";
    numSinpe:string="";
    admin:string="";
}