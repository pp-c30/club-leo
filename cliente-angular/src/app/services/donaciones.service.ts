import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDonaciones } from "../models/donaciones";
@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http:HttpClient) { 

  }
  getDonaciones(){
   return this.http.get<IDonaciones[]>('http://localhost:3000/donaciones');
  }


  saveDonacion(unaDonacion:IDonaciones){
   return this.http.post('http://localhost:3000/donaciones',unaDonacion);
  }

updateDonacion(unaDonacion:IDonaciones)
  {
let id:number = unaDonacion.id_donacion;
return this.http.put('http://localhost:3000/donaciones/'+id,unaDonacion);
  }

  deleteDonacion(id:number){
    return this.http.delete ('http://localhost:3000/donaciones/'+id);
  }
}