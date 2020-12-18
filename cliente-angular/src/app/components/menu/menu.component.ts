import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from "../../services/autenticacion.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public serviceAut:AutenticacionService) { }

  ngOnInit(): void {
  }

}
