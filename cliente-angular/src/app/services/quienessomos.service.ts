import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IQuienessomos } from '../models/quienessomos';

@Injectable({
  providedIn: 'root'
})
export class QuienessomosService {
  constructor(private http:HttpClient) { 

  }
  updateQuienessomos(quieness:IQuienessomos){
    let id_qs=quieness.id_qs;
    return this.http.put("http://localhost:3000/quienessomos/"+id_qs, quieness);
  }

  saveQuienessomos (quieness:IQuienessomos){

  return this.http.post("http://localhost:3000/quienessomos",quieness);
  }

  deleteQuienessomos (id_qs:number){
  return this.http.delete("http://localhost:3000/quienessomos/"+id_qs);
  }

  getQuienessomos(){

   return this.http.get<IQuienessomos[]>("http://localhost:3000/quienessomos");
  }

 
}
