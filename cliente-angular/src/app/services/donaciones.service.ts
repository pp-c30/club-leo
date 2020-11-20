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
   return this.http.get<IDonaciones[]>('http://localhost:81/donaciones');
  }
  

}
