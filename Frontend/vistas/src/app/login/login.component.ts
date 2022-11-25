import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { LoginService } from '../servicios/login.service'; 
import { LoginI } from './login.interface';
import { EmpleadoI } from './empleado.interface';
import { ResponseI } from './reponse.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)

  })

  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form:any){
 
    this.loginservice.loginByEmailAfiliado(form).subscribe(data =>{
      let datos:ResponseI= data;

      if(datos.password == form.password && datos.user == form.user){
        this.router.navigate(["menuAfiliados"])
      } else {
        this.loginservice.loginByEmailCliente(form).subscribe(data =>{
          let datos:ResponseI = data;
          if (datos.password == form.password && datos.user == form.user){
            this.router.navigate(["menuCliente"])
          } else{
            this.loginservice.loginByEmailEmpleado(form).subscribe(data =>{
              let datos:ResponseI = data;
              if(datos.password == form.password && datos.user == form.user){
                this.router.navigate(["menuAdmin"])
              } else if (String(data)== "El usuario ingresado no existe") {
                alert("Usuario o contraseña incorrectos");
              }
            })
          }
        })
      }     
      console.log(data.user); 
 
      console.log(data.reponse);
      console.log(data);
    });



  




  }


}
