import { conexion } from "../database";
import { Request, Response } from "express";
import { Galeria } from "../models/galeria";
import cloudinary from "cloudinary";
import fs from "fs-extra";

cloudinary.v2.config({
    cloud_name:'dnicjefgk',
    api_key:'415915133939975',
    api_secret:'VDGJ90dhgbybFw_gzAUdJe3raig'
})



export class galeriaController
{
    //Listar galeria
    public async listarGaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let listarGaleria = await conectar.query("select * from galeria");
        return res.json(listarGaleria);
    }


    //Guardar Galeria
    public async guardarGaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let files:any = req.files;
        const t = req.body.nombre_titulo;
        const d = req.body.nombre_descripcion;
        const c = req.body.nombre_categoria;
        const fecha = req.body.la_fecha;
        


        const unaGaleria = {
            titulo:t,
            descripcion:d,
            categoria:c,
            fecha_galeria:fecha
        }

        const resultado = await conectar.query('insert into galeria set ?',[unaGaleria]);

        for(let i = 0; i < files.length; i++)
        {
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);
            const imagen_galeria = {
                id_galeria:resultado.insertId,
                imagen:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id,
                categoria_galeria:c
            }
            await conectar.query('insert into imagen_galeria set ?', [imagen_galeria]);
            await fs.unlink(files[i].path);
        }
        return res.json('se guardo exitosamente');
    }

    //Eliminar una galeria
    public async eliminarGaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from galeria where id_galeria = ?", [codigo]);
        return res.json("Galeria fue eliminada exitosamente");
    }

    //La actualizacion de un galeria
     public async actualizarGaleria(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update galeria set ? where id_galeria = ?", [nuevos_datos,codigo]);
   
        return res.json('La galeria se actualizo exitosamente!');
   
    }


    //Obtener una galeria
    public async obtenerGaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let galeria = await conectar.query("select * from galeria where id_obra = ?", [codigo]);
        return res.json(galeria); 

    }

}