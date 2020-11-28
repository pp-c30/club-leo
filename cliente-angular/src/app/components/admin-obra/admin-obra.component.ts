import { Component, OnInit } from '@angular/core';
import { Iobra } from 'src/app/models/obra';
import { ObraService } from "../../services/obra.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IHtmlInputEvent } from "../../models/inputElement";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { CategoriaobraService } from "../../services/categoriaobra.service";
import { ICategoriaObra } from "../../models/categoriaobra";
import { error } from 'protractor';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ItipoObra } from 'src/app/models/tipoobra';
import { TipoobraService } from "../../services/tipoobra.service";


@Component({
  selector: 'app-admin-obra',
  templateUrl: './admin-obra.component.html',
  styleUrls: ['./admin-obra.component.css']
})
export class AdminObraComponent implements OnInit {



  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['italic'],
      //['fontSize']
    ]
};



  obras:Iobra[] = [];
  formObra:FormGroup;
  //para almacenar varias imagenes
  archivos:FileList;
  //almacena las imagenes url
  imagenes_url = [];

  lista_de_categorias:ICategoriaObra[] = [];

  lista_de_tipo:ItipoObra[] = [];

  ocultar_boton_file:any = 'display:block';

  buscarObra:any ="";

  p:number = 1;

  constructor(private serviceTipoobra:TipoobraService, private serviceCategoria:CategoriaobraService, private router:Router ,private spinner:NgxSpinnerService ,private fb:FormBuilder, private serviceObra:ObraService) { 
    this.formObra = this.fb.group({
      id_obra:[null],
      titulo:['',[Validators.required, Validators.minLength(4)]],
      descripcion:['',[Validators.required]],
      categoria:[null,[Validators.required]],
      tipo:[null,[Validators.required]],
      fecha_obra:[null,[Validators.required]],
      archivo:['']
    });
  }

  ngOnInit(): void {
    //apenas inicie la app se ejecutara este metodo
    this.listaObras();
    this.obtenerCategorias();
    this.obtenerTipos();
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
      categoria:datosObra.id_categoria,
      tipo:datosObra.id_tipo,
      fecha_obra:{year:Number(datosObra.year),month:Number(datosObra.month),day:Number(datosObra.day)},
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
      archivo:'',
    });
  }

  obtenerCategorias()
  {
    this.serviceCategoria.getCategoriaObra().subscribe(
      resultado => {
        this.lista_de_categorias = resultado;
      },
      error => console.log(error)
    );
  }

  obtenerTipos()
  {
    this.serviceTipoobra.getTipoobra().subscribe(
      resultado => {
        this.lista_de_tipo = resultado;
      },
      error => console.log(error)
    );
  }
}
