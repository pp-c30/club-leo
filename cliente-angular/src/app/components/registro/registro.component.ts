import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutenticacionService } from "../../services/autenticacion.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup

  constructor(private route:Router, private serviceAut:AutenticacionService, private fb:FormBuilder) { 
    this.formRegistro = this.fb.group({
      username:['', [Validators.required, Validators.minLength(6)]],
      password:['', [Validators.required, Validators.minLength(6)]],
      email:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  registrar()
  {
    this.serviceAut.register(this.formRegistro.value).subscribe(
      respuesta => {
        //se almacenara el token recivido en un espacio del navegador que es localStorange
        localStorage.setItem('tonken', String(respuesta));
        this.formRegistro.reset();
        this.route.navigate(['/inicio']);
      }
    )
  }

}
