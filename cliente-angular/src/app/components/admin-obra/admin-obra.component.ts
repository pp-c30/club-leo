import { Component, OnInit } from '@angular/core';
import { Iobra } from 'src/app/models/obra';
import { ObraService } from "../../services/obra.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IHtmlInputEvent } from "../../models/inputElement";

@Component({
  selector: 'app-admin-obra',
  templateUrl: './admin-obra.component.html',
  styleUrls: ['./admin-obra.component.css']
})
export class AdminObraComponent implements OnInit {

  obras:Iobra[] = [];
  formObra:FormGroup;
  //para almacenar varias imagenes
  archivos:FileList;
  //almacena las imagenes url
  imagenes_url = []

  constructor(private serviceObra:ObraService, private fb:FormBuilder) { 
    this.formObra = this.fb.group({
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      categoria:[''],
      tipo:[''],
      fecha_obra:[''],
      imagen:['',[Validators.required]],
      archivo:['']
      
    });
  }

  ngOnInit(): void {
    this.listaObras();
  }

  listaObras()
  {
    this.serviceObra.getObras().subscribe(
      resultado => {
        this.obras = resultado;
      }
    )
  }

  guardarObra()
  {

  }

  mostrarImagenSeleccionada(evento:IHtmlInputEvent)
  {
    this.imagenes_url = [];
    this.archivos = evento.target.files;
    if(this.archivos)
    {
      for (let i = 0; i < this.archivos.length; i++) {
        const reader = new FileReader();
        //se hace lectura de los archivos
        reader.readAsDataURL(this.archivos[i]);
        //se hace la lectura y obtiene la ubicacion url para mostrar en html
        reader.onload = () => {
          //almacena la lectura de las imagenes
          this.imagenes_url.push(reader.result);
        }
        
      }
    }
  }

}
