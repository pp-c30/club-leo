import { Component, OnInit } from '@angular/core';
import { QuienessomosService } from '../../services/quienessomos.service';

@Component({
  selector: 'app-quienessomos-publico',
  templateUrl: './quienessomos-publico.component.html',
  styleUrls: ['./quienessomos-publico.component.css']
})
export class QuienessomosPublicoComponent implements OnInit {

  lista_quienessomos = [];

  constructor(private serviceQ:QuienessomosService) { }

  ngOnInit(): void {
    this.obtenerQuienesSomos();
  }

  obtenerQuienesSomos()
  {
    this.serviceQ.getQuienessomos().subscribe(
      respuesta => {
        this.lista_quienessomos = respuesta;
      },
      error => console.log(error)
    );
  }

}
