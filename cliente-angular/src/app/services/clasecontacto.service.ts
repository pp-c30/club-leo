import { Injectable } from '@angular/core';
import { Iclasecontacto } from "../models/clasecontacto";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClasecontactoService {

  constructor(private http:HttpClient) { }

  getClasecontacto()
  {
    return this.http.get<Iclasecontacto[]>('http://localhost:3000/clasecontacto');
  }
}
