import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Icontacto } from "../models/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }

  getContacto()
  {
    return this.http.get<Icontacto[]>('http://localhost:3000/contacto');
  }

  getContactoAdmin()
  {
    return this.http.get<Icontacto[]>('http://localhost:3000/contacto-admin');
  }

  saveContacto(unContacto:Icontacto)
  {
    return this.http.post('http://localhost:3000/contacto', unContacto);
  }

  updateContacto(unContacto:Icontacto)
  {
    let id_contacto:number = unContacto.id_contacto;
    return this.http.put('http://localhost:3000/contacto/'+id_contacto, unContacto);
  }

  deleteContacto(id_contacto:number)
  {
    return this.http.delete('http://localhost:3000/contacto/'+id_contacto);
  }
}
