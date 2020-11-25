import { Component, OnInit } from '@angular/core';
import { DonacionesService } from "../../services/donaciones.service";

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  listDonaciones = [];
  constructor(private donacioneServ:DonacionesService) { 
    
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
}