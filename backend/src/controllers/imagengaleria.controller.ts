import { conexion } from "../database";
import { Request, Response } from "express";
import { Iimagengaleria } from "../models/imagengaleria";


export class ImagengaleriaController
{
    //Listar imagenes 
    public async listarImagengaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen = await conectar.query("select * from imagen_galeria");
        return res.json(imagen);
    }


    //Guardar imagen 
    public async guardarImagengaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen:Iimagengaleria = req.body;
        await conectar.query("insert into imagen_galeria set ?", [imagen]);
        return res.json("la imagen fue guardada exitosamente");
    }

    //Eliminacion de una imagen
    public async eliminarImagengaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from imagen_galeria where id_ig = ?", [codigo]);
        return res.json("la imagen fue eliminada exitosamente");
    }

    //Actualizacion de una imagen 
     public async actualizarImagengaleria(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update imagen_galeria set ? where id_ig = ?", [nuevos_datos,codigo]);
   
        return res.json('se actualizo exitosamente!');
   
    }


    //Obtener una imagen 
    public async obtenerUnaimagengaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let unaimagen = await conectar.query("select * from imagen_galeria where id_ig = ?", [codigo]);
        return res.json(unaimagen); 

    }

}