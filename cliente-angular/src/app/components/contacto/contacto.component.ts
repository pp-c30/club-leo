import { Component, OnInit } from '@angular/core';
import { Icontacto } from "../../models/contacto";
import { ContactoService } from "../../services/contacto.service";


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lista_de_contacto:Icontacto[] = [];
  
 

  constructor(private serviceContacto:ContactoService) { }

  ngOnInit(): void {
    this.obtenerContacto();
  }

  obtenerContacto()
  {
    this.serviceContacto.getContacto().subscribe(
      respuesta => {
        console.log(respuesta);
        this.lista_de_contacto = respuesta;
      },
      error => console.log(error)
    );
  }

}
