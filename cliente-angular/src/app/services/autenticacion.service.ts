import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Iusuario } from "../models/usuario";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private route:Router, private http:HttpClient) { }

  register(datosRegistro:Iusuario)
  {
    return this.http.post('http://localhost:3000/registro', datosRegistro);
  }

  login(datosIngreso:Iusuario)
  {
    return this.http.post('http://localhost:3000/ingreso', datosIngreso);
  }

  verificarUsuarioLogueado()
  {
    if(localStorage.getItem('token'))
    {
      return true;
    }
  }

  cerrarSesion()
  {
    localStorage.removeItem('token');
    this.route.navigate(['/ingreso'])

  }

}
