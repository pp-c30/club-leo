import { Component, OnInit } from '@angular/core';
import { ObraService } from "../../services/obra.service";
import { Iobra } from "../../models/obra";
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista_de_obra:Iobra[] = [];

  constructor(private router:Router, private serviceObra:ObraService) { }

  ngOnInit(): void {
    this.listarObras();
  }

  listarObras()
  {
    this.serviceObra.getObras().subscribe(
      respuesta => {
        this.lista_de_obra = respuesta;
      },
      error => console.log(error)
    );
  }

  verMas(obras:Iobra)
  {
    let datosExtras:NavigationExtras = {
      queryParams:obras
    }
    this.router.navigate(['obras-detalle'],datosExtras);
  }

}
