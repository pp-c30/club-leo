import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ObraService } from "../../services/obra.service";

@Component({
  selector: 'app-obras-detalle',
  templateUrl: './obras-detalle.component.html',
  styleUrls: ['./obras-detalle.component.css']
})
export class ObrasDetalleComponent implements OnInit {

  id_obra:number;
  titulo:string;
  descripcion:string
  cateoria:number;
  fecha_obra:Date;
  tipo:number;

  lista_imagenes:any = []
  constructor(private activeRouter:ActivatedRoute, private serviceObra:ObraService) { }

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe(
      params => {
        this.id_obra = params.id_obra;
        this.titulo = params.titulo;
        this.descripcion = params.descripcion;
        this.cateoria = params.categoria;
        this.fecha_obra = params.fecha_obra;
        this.tipo = params.tipo;
      }
    );

    this.obtenerImagenesObra();
  }


  obtenerImagenesObra()
  {
    this.serviceObra.getImagesObras(this.id_obra).subscribe(
      resultado => {
        this.lista_imagenes = resultado;
      },
      error => console.log(error)
    )
  }

}
