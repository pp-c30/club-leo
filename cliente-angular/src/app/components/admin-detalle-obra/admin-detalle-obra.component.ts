import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ObraService } from "../../services/obra.service";
import { IobraDetalle } from "../../models/obra-detalle";

@Component({
  selector: 'app-admin-detalle-obra',
  templateUrl: './admin-detalle-obra.component.html',
  styleUrls: ['./admin-detalle-obra.component.css']
})
export class AdminDetalleObraComponent implements OnInit {
  id_obra:number;
  imagenes_obra:IobraDetalle[] = [];

  constructor(private activatedRoute:ActivatedRoute, private serviceObra:ObraService) { }

  ngOnInit(): void {
    //aca capturamos la id de las imagenes de las obras
    this.activatedRoute.params.subscribe(
      params => {
        this.id_obra = params.id_obra
      }
    );

    this.listarImagenesObra(this.id_obra);
  }

//el metodo que listara las imagenes y luego se ejecutara en ngOnInit
  listarImagenesObra(id_obra:number)
  {
    this.serviceObra.getImagesObras(id_obra).subscribe(
      resultado => {
        this.imagenes_obra = resultado
      },
      error => console.log(error)
    )
  }

}
