import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Iobra } from 'src/app/models/obra';
import { ObraService } from '../../services/obra.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  lista_obras:Iobra[] = []; 

  buscarObra:any ="";

  constructor(private serviceObra:ObraService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerObras();
  }

  obtenerObras()
  {
    this.serviceObra.getObras().subscribe(
      resultado => {
        this.lista_obras = resultado;
      }
    );
  }

  getBotonMas(obras:Iobra)
  {
    let datosExtras:NavigationExtras = {
      queryParams:obras
    }
    this.router.navigate(['obras-detalle'],datosExtras);
  }
}
