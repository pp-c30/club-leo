import { Component, OnInit } from '@angular/core';
import { QuienessomosService } from "../../services/quienessomos.service";
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { IQuienessomos } from 'src/app/models/quienessomos';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

  listquienessomos = [];

  formQuienessomos: FormGroup;

  p:number;
  
  buscarquienessomos: any = "" ;

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

  constructor(private quienessomosServ:QuienessomosService, private fb: FormBuilder) { 
    
this.formQuienessomos = this.fb.group({
  id_qs: [null],
  descripcion:['',[Validators.required, Validators.minLength(3)]],
})

  }

  ngOnInit(): void {
    this.obtenerQuienessomos();
  }

 obtenerQuienessomos(){
   this.quienessomosServ.getQuienessomos().subscribe(
     resultado => {this.listquienessomos = resultado},
     error => console.log(error)
     )
   
 }
guardarQuienesSomos(){
  
  if(this.formQuienessomos.value.id_qs)
  {
    //se actualiza
    this.quienessomosServ.updateQuienessomos(this.formQuienessomos.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerQuienessomos();
        this.formQuienessomos.reset();
      },
      error => console.log(error)
    )


  }else{
    this.quienessomosServ.saveQuienessomos(this.formQuienessomos.value).subscribe(
      resultado =>{
        console.log(resultado);
        //se refresca la grilla
        this.obtenerQuienessomos();
        this.formQuienessomos.reset();
      },
      error => console.log(error)
    );
  }
}

editarQuienessomos(quienessomos:IQuienessomos)
  {
    this.formQuienessomos.setValue(quienessomos);
  }

  eliminarQuienessomos(id:number)
  {
if(confirm('Esta seguro que desea ejecutar esta accion?')){
  this.quienessomosServ.deleteQuienessomos(id).subscribe(
    respuesta => {
      console.log(respuesta);
      this.obtenerQuienessomos();
      
    },
    error => console.log(error)
  );
  }

    
  }
}
