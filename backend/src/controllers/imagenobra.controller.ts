import { conexion } from "../database";
import { Request, Response } from "express";
import { Iimagenobra } from "../models/imagenobras";


export class ImagenobraController
{
    //Listar imagenes 
    public async listarImagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen = await conectar.query("select * from imagen_obra");
        return res.json(imagen);
    }


    //Guardar imagen 
    public async guardarImagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen:Iimagenobra = req.body;
        await conectar.query("insert into imagen_obra set ?", [imagen]);
        return res.json("la imagen fue guerdada exitosamente");
    }

    //La eliminacion de una imagen
    public async eliminarImagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from imagen_obra where id_io = ?", [codigo]);
        return res.json("la imagen fue eliminada exitosamente");
    }

    //La actualizacion de una imagen 
     public async actualizarImagenobra(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update imagen_obra set ? where id_io = ?", [nuevos_datos,codigo]);
   
        return res.json('se actualizo exitosamente!');
   
    }


    //Obtener una imagen 
    public async obtenerUnaimagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let unaimagen = await conectar.query("select * from imagen_obra where id_io = ?", [codigo]);
        return res.json(unaimagen); 

    }

}