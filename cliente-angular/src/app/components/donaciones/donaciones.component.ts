import { Component, OnInit } from '@angular/core';
import { DonacionesService } from "../../services/donaciones.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  listDonaciones = [];

  formDonacion: FormGroup;

  constructor(private donacioneServ:DonacionesService, private fb: FormBuilder) { 
    
this.formDonacion = this.fb.group({

  donacion:[''],
  descripcion:[''],
  telefono:[''],
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
  //console.log(this.formDonacion);
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
