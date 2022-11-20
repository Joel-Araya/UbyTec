export class AdminComercioAfiliado{

    constructor(nombre:string, provincia:string, canton:string, distrito:string, telefonos:string, usuario:string, password:string, isEdit:boolean){

        this.nombre = nombre;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.telefonos = telefonos;
        this.usuario = usuario;
        this.password = password;
        this.isEdit = isEdit;
        
    }

    nombre:string="";
    provincia:string="";
    canton:string="";
    distrito:string="";
    telefonos:string="";
    usuario:string="";
    password:string="";
    isEdit:boolean=false;
}