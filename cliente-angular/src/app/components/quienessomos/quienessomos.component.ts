import { Component, OnInit } from '@angular/core';
import { QuienessomosService } from "../../services/quienessomos.service";
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { IQuienessomos } from 'src/app/models/quienessomos';

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
