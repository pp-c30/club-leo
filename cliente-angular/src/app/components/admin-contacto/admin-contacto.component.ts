import { Component, OnInit } from '@angular/core';
import { Icontacto } from "../../models/contacto";
import { ContactoService } from "../../services/contacto.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Iclasecontacto } from "../../models/clasecontacto";
import { ClasecontactoService } from "../../services/clasecontacto.service";


@Component({
  selector: 'app-admin-contacto',
  templateUrl: './admin-contacto.component.html',
  styleUrls: ['./admin-contacto.component.css']
})
export class AdminContactoComponent implements OnInit {

  lista_contacto:Icontacto[] = [];
  formContacto:FormGroup;

  buscarContacto:any ="";

  p:number = 1;

  lista_de_clasecontacto:Iclasecontacto[] = [];

  constructor(private serviceClasecontacto:ClasecontactoService, private fb:FormBuilder, private serviceContacto:ContactoService){
    this.formContacto = this.fb.group({
      id_contacto:[null],
      red_social:[''],
      url:['', [Validators.required, Validators.minLength(4)]],
      clase:[null]
    });
  }

  ngOnInit(): void {
    this.obtenerContacto();
    this.obtenerClasecontacto();
  }


  obtenerContacto()
  {
    this.serviceContacto.getContactoAdmin().subscribe(
      respuesta => {
        this.lista_contacto = respuesta
      },
      error => console.log(error)
    );
  }

  guardarContacto()
  {
    if(this.formContacto.value.id_contacto){
      this.serviceContacto.updateContacto(this.formContacto.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.obtenerContacto();
          this.formContacto.reset();
        },
        error => console.log(error)
      );
    }else{
      this.serviceContacto.saveContacto(this.formContacto.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerContacto();
          this.formContacto.reset();
        },
        error => console.log(error)
      );
    }
  }

  editarContacto(contacto:Icontacto)
  {
    this.formContacto.setValue({
      id_contacto:contacto.id_contacto,
      red_social:contacto.red_social,
      url:contacto.url,
      clase:contacto.id_clase
    });
  }

  vaciarFormContacto()
  {
    this.formContacto.reset();
  }

  eliminarContacto(id_contacto:number)
  {
    if(confirm('¿Esta seguro de ejecutar esta acción?')){
      this.serviceContacto.deleteContacto(id_contacto).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerContacto();
        }
      );
    }

  }

  obtenerClasecontacto()
  {
    this.serviceClasecontacto.getClasecontacto().subscribe(
      respuesta => {
        this.lista_de_clasecontacto = respuesta;
      },
      error => console.log(error)
    );
  }

}
