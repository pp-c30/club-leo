import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoriaObra } from "../models/categoriaobra";


@Injectable({
  providedIn: 'root'
})
export class CategoriaobraService {

  constructor(private http:HttpClient) { }

  getCategoriaObra()
  {
    return this.http.get<ICategoriaObra[]>('http://localhost:3000/categoriaobra');
  }

  getCategoriaObraAdmin()
  {
    return this.http.get<ICategoriaObra[]>('http://localhost:3000/categoriaobra-admin');
  }

  saveCategoriaObra(unaCategoria:ICategoriaObra)
  {
    return this.http.post('http://localhost:3000/categoriaobra', unaCategoria);
  }

  updateCategoriaObra(unaCategoria:ICategoriaObra)
  {
    let id_co:number = unaCategoria.id_co;
    return this.http.put('http://localhost:3000/categoriaobra/'+id_co,unaCategoria);
  }

  deleteCategoriaObra(id_co:number)
  {
    return this.http.delete('http://localhost:3000/categoriaobra/'+id_co);
  }
}

