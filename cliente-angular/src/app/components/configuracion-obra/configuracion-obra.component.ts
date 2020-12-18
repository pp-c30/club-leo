import { Component, OnInit } from '@angular/core';
import { ICategoriaObra } from "../../models/categoriaobra";
import { TipoobraService } from "../../services/tipoobra.service";
import { CategoriaobraService } from "../../services/categoriaobra.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { error } from 'protractor';
import { ItipoObra } from 'src/app/models/tipoobra';

@Component({
  selector: 'app-configuracion-obra',
  templateUrl: './configuracion-obra.component.html',
  styleUrls: ['./configuracion-obra.component.css']
})
export class ConfiguracionObraComponent implements OnInit {

  formCategoria:FormGroup;
  lista_de_categoria:ICategoriaObra[] = [];

  formTipo:FormGroup;
  lista_de_tipo:ItipoObra[] = [];

  buscarCategoria:any ="";
  p:number = 1;

  buscarTipo:any ="";
  p2:number = 1;

  alerta:any;
  alertaTipo:any;


  constructor(private serviceTipo:TipoobraService ,private serviceCategoria:CategoriaobraService, private fb:FormBuilder) {
    //formulario de categoria_obra
    this.formCategoria = this.fb.group({
      id_co:[null],
      descripcion:['',[Validators.required, Validators.minLength(4)]]
    });

    //formulario de tipo_obra
    this.formTipo =  this.fb.group({
      id_tipo:[null],
      descripcion:['', [Validators.required, Validators.minLength(4)]],
    });
   }

  ngOnInit(): void {
    this.obtenerCategoria();
    this.obtenerTipoobra();
  }

  obtenerCategoria()
  {
    this.serviceCategoria.getCategoriaObraAdmin().subscribe(
      resultado => {
        this.lista_de_categoria = resultado;
      },
      error => console.log(error)
    );
  }

  guardarCategoria()
  {
    //se actualiza si hay una id
    if(this.formCategoria.value.id_co)
    {
      this.serviceCategoria.updateCategoriaObra(this.formCategoria.value).subscribe(
        respuesta => {
          this.obtenerCategoria();
          console.log(respuesta);
          this.formCategoria.reset();
        },
        error => console.log(error)
      );
    }
    //guardara si no manda id
    else{
      this.serviceCategoria.saveCategoriaObra(this.formCategoria.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCategoria();
          this.formCategoria.reset();
        },
        error => console.log(error)
      );
    }
  }

  editarCategoria(categoria:ICategoriaObra)
  {
    this.formCategoria.setValue(categoria); 
  }

  eliminarCategoria(id_co:number)
  {
    if(confirm('¿Esta seguro que desea ejecutar esta acción?'))
    {
      this.serviceCategoria.deleteCategoriaObra(id_co).subscribe(
        respuesta => {
          this.alerta = respuesta;
          this.obtenerCategoria();
          
        },
        error => console.log(error)
      );
    }
  }

  obtenerTipoobra()
  {
    this.serviceTipo.getTipoobraAdmin().subscribe(
      respuesta => {
        this.lista_de_tipo = respuesta;
      },
      error => console.log(error)
    );
  }

  guardarTipo()
  {
    //guardara los tipos editados que tenga su id
    if(this.formTipo.value.id_tipo)
    {
      this.serviceTipo.updateTipoobra(this.formTipo.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerTipoobra();
          this.formTipo.reset();
        },
        error => console.log(error)
      );
    }
    //guardara los tipos
    else{
      this.serviceTipo.saveTipoobra(this.formTipo.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerTipoobra();
          this.formTipo.reset();
        }
      );
    }

  }

  eliminarTipo(id_tipo:number)
  {
    if(confirm('¿Esta seguro de ejecutar esta acción?'))
    {
      this.serviceTipo.deleteTipoobra(id_tipo).subscribe(
        respuesta => {
          console.log(respuesta);
          this.alertaTipo = respuesta;
          this.obtenerTipoobra();
        },
        error => console.log(error)
      );
    }
  }

  editarTipo(unTipo:ItipoObra)
  {
    this.formTipo.setValue(unTipo);
  }

  vaciarFormCategoria()
  {
    this.formCategoria.setValue({
      id_co:null,
      descripcion:'',
 
    });
  }

  vaciarFormTipo()
  {
    this.formTipo.reset();
  }

  
}
