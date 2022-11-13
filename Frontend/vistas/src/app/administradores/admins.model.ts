export class Administrador{

    constructor(cedula:number, nombre:string, provincia:string, canton:string, distrito:string, telefonos:string, usuario:string, password:string){

        this.cedula = cedula;
        this.nombre = nombre;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.telefonos = telefonos;
        this.usuario = usuario;
        this.password = password;
    }

    cedula?:number;
    nombre:string="";
    provincia:string="";
    canton:string="";
    distrito:string="";
    telefonos:string="";
    usuario:string="";
    password:string="";
}