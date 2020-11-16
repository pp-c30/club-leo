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

  ocultar_boton_file:any = 'display:block'

  constructor(private router:Router ,private spinner:NgxSpinnerService ,private fb:FormBuilder, private serviceObra:ObraService) { 
    this.formObra = this.fb.group({
      id_obra:[null],
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      categoria:['',[Validators.required]],
      tipo:['',[Validators.required]],
      fecha_obra:['',[Validators.required]],
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
    if(this.formObra.value.id_obra)
    {
      this.spinner.show();
      this.serviceObra.updateObra(this.formObra.value).subscribe(
        resultado => {
          this.formObra.reset();
          this.listaObras();
          this.spinner.hide();
        }
      );

    }else{

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
      );
    }

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

  eliminarObra(id_obra:number)
  {
    if(confirm('¿Esta seguro de llevar a cabo esta acción?')){
      this.serviceObra.deleteObra(id_obra).subscribe(
        resultado => {
          console.log(resultado);
          this.listaObras();
        }
      );
    }
  }

  //se llenara el formulario para editarlo
  editarObra(datosObra:Iobra)
  {
    this.ocultar_boton_file = 'display:none;'
    this.formObra.setValue({
      id_obra:datosObra.id_obra,
      titulo:datosObra.titulo,
      descripcion:datosObra.descripcion,
      categoria:datosObra.categoria,
      tipo:datosObra.tipo,
      fecha_obra:datosObra.fecha_obra,
      archivo:''
    });
  }

  vaciarForm()
  {
    this.ocultar_boton_file = 'display:block;'
    this.formObra.setValue({
      id_obra:null,
      titulo:'',
      descripcion:'',
      categoria:'',
      tipo:'',
      fecha_obra:'',
      archivo:''
    });

  }
}
