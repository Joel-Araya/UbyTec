export class Producto{

    constructor(nombre:string, categoria:string, precio:string, isEdit:boolean){

        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.isEdit = isEdit;
    }

    nombre:string="";
    categoria:string="";
    precio:string="";
    isEdit:boolean=false;
}