import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Iobra } from "../models/obra";
@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http:HttpClient) { }

  saveObra(datosObra:Iobra, files:FileList)
  {
    const fd = new FormData();
    fd.append('titulo',datosObra.titulo);
    fd.append('descripcion',datosObra.descripcion);
    fd.append('categoria',datosObra.categoria);
    fd.append('imagen',datosObra.imagen);
    fd.append('fecha_obra',datosObra.fecha_obra);
    fd.append('tipo',datosObra.tipo);

    for (let i = 0; i < files.length; i++) {
      
      fd.append('img_obra',files[i]);
    }

    return this.http.post('http://localhost:3000/obra',fd);
  }

  getObras()
  {
    return this.http.get<Iobra[]>('http://localhost:3000/obra');
  }
}