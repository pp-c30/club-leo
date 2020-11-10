import { Component, OnInit } from '@angular/core';
import { Iobra } from 'src/app/models/obra';
import { ObraService } from "../../services/obra.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IHtmlInputEvent } from "../../models/inputElement";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

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
  imagenes_url = [];

  constructor(private router:Router ,private spinner:NgxSpinnerService ,private fb:FormBuilder, private serviceObra:ObraService) { 
    this.formObra = this.fb.group({
      titulo:[''],
      descripcion:[''],
      categoria:[''],
      tipo:[''],
      fecha_obra:[''],
      archivo:['']
    });
  }

  ngOnInit(): void {
    //apenas inicie la app se ejecutara este metodo
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
    this.spinner.show();
    this.serviceObra.saveObra(this.formObra.value, this.archivos).subscribe(
      resultado => {
        console.log(resultado);
        //vaciar las imagenes previas del formulario
        this.imagenes_url = [];
        //resetear el formulario
        this.formObra.reset();
        this.listaObras();
        this.spinner.hide();
      },
      error => console.log(error)
    )
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

  //metodo encargado de mostrar el detalle del evento
  detalleObra(id_obra:number)
  {
    this.router.navigate(['/admin-detalle-obra', id_obra]);
  }

}
