import { Component, OnInit } from '@angular/core';
import { DonacionesService } from "../../services/donaciones.service";
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { IDonaciones } from 'src/app/models/donaciones';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  listDonaciones = [];

  formDonacion: FormGroup;

  buscarDonacion:any;

  p:number;
  

  constructor(private donacioneServ:DonacionesService, private fb: FormBuilder) { 
    
this.formDonacion = this.fb.group({
  id_donacion: [null],
  donacion:['',[Validators.required]],
  descripcion:['',[Validators.required, Validators.minLength(3)]],
  telefono:['',[Validators.required]],
})

  }

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

 obtenerDonaciones(){
   this.donacioneServ.getDonaciones().subscribe(
     resultado => this.listDonaciones = resultado,
     error => console.log(error)
     )
   
 }
guardarDonacion(){
  
  if(this.formDonacion.value.id_donacion)
  {
    //se actualiza
    this.donacioneServ.updateDonacion(this.formDonacion.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerDonaciones();
        this.formDonacion.reset();
      },
      error => console.log(error)
    )


  }else{
    this.donacioneServ.saveDonacion(this.formDonacion.value).subscribe(
      resultado =>{
        console.log(resultado);
        //se refresca la grilla
        this.obtenerDonaciones();
        this.formDonacion.reset();
      },
      error => console.log(error)
    );
  }
}

editarDonacion(donacion:IDonaciones)
  {
    this.formDonacion.setValue(donacion);
  }

  eliminarDonacion(id:number)
  {
if(confirm('Esta seguro que desea ejecutar esta accion?')){
  this.donacioneServ.deleteDonacion(id).subscribe(
    respuesta => {
      console.log(respuesta);
      this.obtenerDonaciones();
      
    },
    error => console.log(error)
  );
  }

    
  }
}
