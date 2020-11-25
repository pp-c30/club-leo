import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItipoObra } from "../models/tipoobra";

@Injectable({
  providedIn: 'root'
})
export class TipoobraService {

  constructor(private http:HttpClient) { }

  getTipoobra()
  {
    return this.http.get<ItipoObra[]>('http://localhost:3000/tipoobra');
  }

  saveTipoobra(unTipo:ItipoObra)
  {
    return this.http.post('http://localhost:3000/tipoobra',unTipo);
  }

  deleteTipoobra(id_tipo:number)
  {
    return this.http.delete('http://localhost:3000/tipoobra/'+id_tipo);
  }

  updateTipoobra(unTipo:ItipoObra)
  {
    let id_tipo = unTipo.id_tipo;
    return this.http.put('http://localhost:3000/tipoobra/'+id_tipo, unTipo);
  }

}
