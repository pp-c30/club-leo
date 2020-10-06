import { Request, Response } from "express";
import { conexion } from "../database";
import { Icategoriagaleria } from "../models/categoriagaleria";

export class CategoriagaleriaController
{
    //listar categorias 
    public async listarCategoriagaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let categoria = await conectar.query("select * from categoria_galeria");
        return res.json(categoria);
    }

    //Guardar una categoria 
    public async guardarCategoriagaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let descripcion:Icategoriagaleria = req.body;
        await conectar.query("insert into categoria_galeria set ?",[descripcion]);
        return res.json('La categoría fue guardada exitosamente!');
    }

    //Eliminar una categoria 
    public async eliminarCategoriagaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from categoria_galeria where id_cg = ?", [codigo]);
        return res.json('La categoría fue eliminada exitosamente!')

    }

    //La actualización una categoria
    public async actualizarCategoriagaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
        await conectar.query("update categoria_galeria set ? where id_cg = ?", [nuevos_datos,codigo]);
        return res.json('La categoría se actualizo exitosamente!')
    }

    //Se obtiene una categoria
    public async obtenerUnacategoriagaleria(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let categoria = await conectar.query('select * from categoria_galeria where id_cg = ?', [codigo]);
        return res.json(categoria);
    }



}