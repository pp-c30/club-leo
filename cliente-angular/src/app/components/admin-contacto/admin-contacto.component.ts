import { Component, OnInit } from '@angular/core';
import { Icontacto } from "../../models/contacto";
import { ContactoService } from "../../services/contacto.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


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

  constructor(private fb:FormBuilder, private serviceContacto:ContactoService){
    this.formContacto = this.fb.group({
      id_contacto:[null],
      red_social:['', [Validators.required, Validators.minLength(4)]],
      url:['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    this.obtenerContacto();
  }


  obtenerContacto()
  {
    this.serviceContacto.getContacto().subscribe(
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
    this.formContacto.setValue(contacto);
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

}
