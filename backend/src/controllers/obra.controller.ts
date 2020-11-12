import { conexion } from "../database";
import { Request, Response } from "express";
import { Obra } from "../models/obra";
import cloudinary from "cloudinary";
import fs from "fs-extra";

cloudinary.v2.config({
    cloud_name:'dnicjefgk',
    api_key:'415915133939975',
    api_secret:'VDGJ90dhgbybFw_gzAUdJe3raig'
})



export class obraController
{
    //Listar obras
    public async listarObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let obra = await conectar.query("select * from obra");
        return res.json(obra);
    }


    //Guardar Obra
    public async guardarObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let files:any = req.files;
        const t = req.body.titulo;
        const d = req.body.descripcion;
        const c = req.body.categoria;
        const fecha = req.body.fecha_obra;
        const tipos = req.body.tipo;


        const unaObra = {
            titulo:t,
            descripcion:d,
            categoria:c,
            fecha_obra:fecha,
            tipo:tipos
        }

        const resultado = await conectar.query('insert into obra set ?',[unaObra]);

        for(let i = 0; i < files.length; i++)
        {
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);
            const imagen_obra = {
                id_obra:resultado.insertId,
                imagen:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id,
                categoria_obra:c
            }
            await conectar.query('insert into imagen_obra set ?', [imagen_obra]);
            await fs.unlink(files[i].path);
        }
        return res.json('se guardo exitosamente');
    }

    //Eliminar una obra
    public async eliminarObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        try{
        await conectar.query("delete from obra where id_obra = ?", [codigo]);
        return res.json("La obra fue eliminada exitosamente");

        }catch (error) {
            return res.json("No se pudo eliminar una obra que este siendo utilizada por una imagen");
        }
    }

    //La actualizacion de un obra
     public async actualizarObra(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update obra set ? where id_obra = ?", [nuevos_datos,codigo]);
   
        return res.json('La obra se actualizo exitosamente!');
   
    }


    //Obtener una obra 
    public async obtenerObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let unaobra = await conectar.query("select * from obra where id_obra = ?", [codigo]);
        return res.json(unaobra); 
    }

    //lista de imagenes de obra de la tabla imagenes_obra
    public async listarImagenesObra(req:Request, res:Response)
    {
        let id_obra = req.params.id_obra;
        let conectar = await conexion();
        let lista_imagenes = await conectar.query('select * from imagen_obra where id_obra = ?', [id_obra]);
        return res.json(lista_imagenes);
    }

    public async guardarImagenesObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        const archivos:any = req.files;
        let id_obra = req.params.id_obra;
        for (let i = 0; i < archivos.length; i++) {
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(archivos[i].path);

            const imagenes_obra = {
                id_obra:id_obra,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
            await conectar.query('insert into imagen_obra set ?', [imagenes_obra]);
            await fs.unlink(archivos[i].path);
        } 
       return res.json('Se agregaron las imagenes de manera exitosa!');

    }

}