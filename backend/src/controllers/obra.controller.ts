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
        let obra = await conectar.query('select *,(select descripcion from tipo_obra where id_tipo = o.tipo) as tipo, tipo as id_tipo, (select descripcion from categoria_obra where id_co = o.categoria) as categoria, categoria as id_categoria, DATE_FORMAT(fecha_obra, "%d/%m/%Y") as fecha_obra, DATE_FORMAT(fecha_obra, "%Y") as year, DATE_FORMAT(fecha_obra, "%m") as month, DATE_FORMAT(fecha_obra, "%d") as day from obra o');
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
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
            await conectar.query('insert into imagen_obra set ?', [imagen_obra]);
            await fs.unlink(files[i].path);
        }
        return res.json('se guardo exitosamente');
    }

    //Eliminar una obra
    public async eliminarCategoriaObra(req:Request, res:Response)
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
        //actuara cuando no lleguen imagenes
        if(!req.file)
        {
            const conectar = await conexion();
            //obtener los datos del body pero solo necesitamos la id para actualizar
            let unaObra = req.body;
            
            const nuesvos_datos = {
                titulo:req.body.titulo,
                descripcion:req.body.descripcion,
                categoria:req.body.categoria,
                fecha_obra:req.body.fecha_obra,
                tipo:req.body.tipo
            }
            await conectar.query("update obra set ? where id_obra = ?", [nuesvos_datos,unaObra.id_obra]);
    
            return res.json('La obra se actualizo exitosamente!');
        }
   
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

    public async eliminarImagenesObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let id_io = req.params.id_io;
        let public_id = req.params.public_id;
        await conectar.query('delete from imagen_obra where id_io = ?', [id_io]);
        await cloudinary.v2.uploader.destroy(public_id);
        res.json('Se elimino exitosamente!');
    }

    public async eliminarObra(req:Request, res:Response)
    {
        let id_obra = req.params.id_obra;
        const conectar = await conexion();

        let lista_imagenes_obra = await conectar.query('select * from imagen_obra where id_obra = ?',[id_obra]);

        for (let i = 0; i < lista_imagenes_obra.length; i++) {
            await cloudinary.v2.uploader.destroy(lista_imagenes_obra[i].public_id);
            
        }
        await conectar.query('delete from imagen_obra where id_obra = ?',[id_obra]);
        await conectar.query('delete from obra where id_obra = ?',[id_obra]);

        res.json('Se elimino completamente la obra!');

    }

    public async establecerPortada(req:Request, res:Response)
    {
        //recibimos la id de la imagen que seleccionemos
        let id_io = req.params.id_io;
        //reciviremos la id de la obra que se selecciono
        let id_obra = req.params.id_obra;
        const conectar = await conexion();

        //primero se pone todas las imagenes en la columna portada en cero
        const portadasEnEstadoCero = {
            portada:0,
        }

        await conectar.query('update imagen_obra set ? where id_obra = ? ',[portadasEnEstadoCero,id_obra]);

        //con la id elegimos la imagen de la columna portada que cambiara en 1
        const datos_imagenes_evento = {
            portada:1,
        }
        
        await conectar.query('update imagen_obra set ? where id_io = ?',[datos_imagenes_evento,id_io]);

        //de la imagen seleccionada nos traeremos todos los datos de esa imagen portada, seleccionda por su id
        const unaFila = await conectar.query('select * from imagen_obra where id_io = ?',[id_io]);

        //creamos un objeto que guardara la url de los datos que nos traimos y se guardara en la culumna imagen
        let datosObra = {
            imagen:unaFila[0].imagen_url,
        }

        //luego traemos la url de la imagen seleccionada y la guardamos actualizando la columna imagen de la tabla obra
        await conectar.query('update obra set ? where id_obra = ?',[datosObra,id_obra]);

        res.json('Se estableció portada!');
    }


}