import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Iobra } from "../models/obra";
import { IobraDetalle } from "../models/obra-detalle";

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http:HttpClient) { }

  saveObra(datosObra:Iobra, files:FileList)
  {
    //se enviaran los datos en un body encapsulado
    const fd = new FormData();
    fd.append('titulo',datosObra.titulo);
    fd.append('descripcion',datosObra.descripcion);
    fd.append('categoria',datosObra.categoria);
    fd.append('fecha_obra',String(datosObra.fecha_obra.year+'-'+datosObra.fecha_obra.month+'-'+datosObra.fecha_obra.day));
    fd.append('tipo',datosObra.tipo);
    fd.append('estado',String(datosObra.estado));

    for (let i = 0; i < files.length; i++) {
      
      fd.append('img_obra',files[i]);
    }

    return this.http.post('http://localhost:3000/obra',fd);
  }

  getObras()
  {
    return this.http.get<Iobra[]>('http://localhost:3000/obras');
  }
  getObrasAdmin()
  {
    return this.http.get<Iobra[]>('http://localhost:3000/obras-admin');
  }

  getImagesObras(id_obra:number)
  {
    return this.http.get<IobraDetalle[]>('http://localhost:3000/obra-imagen/'+id_obra);
  }

  //agregar mas imagenes en detalle obra
  addImagesObras(id_obra:number, files:FileList)
  {
    const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
      fd.append('img-obra',files[i]);
    }
    return this.http.put('http://localhost:3000/agregar-imagenes-obra/'+id_obra, fd);
  }

  deleteImagenObra(id_io:number, public_id:string)
  {
    return this.http.delete('http://localhost:3000/obra-imagen-detalle/'+id_io+'/'+public_id);
  }

  deleteObra(id_obra:number)
  {
    return this.http.delete('http://localhost:3000/obra/'+id_obra);
  }

  updateObra(datosObra:Iobra)
  {
    let id_obra = datosObra.id_obra;
    datosObra.fecha_obra = String(datosObra.fecha_obra.year+'-'+datosObra.fecha_obra.month+'-'+datosObra.fecha_obra.day);

    return this.http.put('http://localhost:3000/obras/'+id_obra,datosObra);
  }

  //metodo encargado de editar un registro y poner la portada en estado 0
  assingPortada(id_io:number,id_obra:number)
  {
    return this.http.get('http://localhost:3000/obra-portada/'+id_io+'/'+id_obra);
  }


}
