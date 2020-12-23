import { Component, OnInit } from '@angular/core';
import { DonacionesService } from "../../services/donaciones.service";

@Component({
  selector: 'app-donacion-publico',
  templateUrl: './donacion-publico.component.html',
  styleUrls: ['./donacion-publico.component.css']
})
export class DonacionPublicoComponent implements OnInit {

  lista_donacion = [];

  constructor(private serviceD:DonacionesService) { }

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones()
  {
    this.serviceD.getDonaciones().subscribe(
      respuesta => {
        this.lista_donacion = respuesta;
      },
    );

  }



}
