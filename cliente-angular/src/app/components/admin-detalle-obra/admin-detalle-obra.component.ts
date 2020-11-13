import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ObraService } from "../../services/obra.service";
import { IobraDetalle } from "../../models/obra-detalle";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IHtmlInputEvent } from "../../models/inputElement";

@Component({
  selector: 'app-admin-detalle-obra',
  templateUrl: './admin-detalle-obra.component.html',
  styleUrls: ['./admin-detalle-obra.component.css']
})
export class AdminDetalleObraComponent implements OnInit {
  id_obra:number;
  imagenes_obra:IobraDetalle[] = [];
  formDetalleObra:FormGroup;
  archivos:FileList;
  imagenes_leidas = [];

  constructor(private fb:FormBuilder ,private activatedRoute:ActivatedRoute, private serviceObra:ObraService) 
  {
    this.formDetalleObra = this.fb.group({
      archivos:['']
    });
  }

  ngOnInit(): void {
    //aca capturamos la id de las imagenes de las obras 
    this.activatedRoute.params.subscribe(
      params => {
        this.id_obra = params.id_obra
      }
    );

    this.listarImagenesObra(this.id_obra);
  }

//el metodo que listara las imagenes y luego se ejecutara en ngOnInit
  listarImagenesObra(id_obra:number)
  {
    this.serviceObra.getImagesObras(id_obra).subscribe(
      resultado => {
        this.imagenes_obra = resultado
      },
      error => console.log(error)
    )
  };

  mostrarImagenesPrevias(evento:IHtmlInputEvent)
  {
    this.imagenes_leidas = [];
    this.archivos = evento.target.files;
    if(this.archivos)
    {
      for (let i = 0; i < this.archivos.length; i++) {
        //una herramienta del navegador, creamos una instancia para poder leer las imagenes en el navegador
        const reader = new FileReader();
        //leer las imagenes 1 a la ves
        reader.readAsDataURL(this.archivos[i]);

        reader.onload = () =>{
          //guardamos la ubicacion de las imagenes
          this.imagenes_leidas.push(reader.result);

        }
        
      }
    }
  }

  agregarImagenesObra()
  {
    this.serviceObra.addImagesObras(this.id_obra, this.archivos).subscribe(
      resultado => {
        this.formDetalleObra.reset();
        this.listarImagenesObra(this.id_obra);
        this.imagenes_leidas = [];
      },
      error => console.log(error)
    );
    
  }

}
