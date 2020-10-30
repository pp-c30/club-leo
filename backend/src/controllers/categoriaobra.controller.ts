import { Request, Response } from "express";
import { conexion } from "../database";
import { Icategoriaobra } from "../models/categoriaobra";

export class CategoriaobraController
{
    //listar categorias 
    public async listarCategoriaobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let categoria = await conectar.query("select * from categoria_obra");
        return res.json(categoria);
    }

    //Guardar una categoria 
    public async guardarCategoriaobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let descripcion:Icategoriaobra = req.body;
        await conectar.query("insert into categoria_obra set ?",[descripcion]);
        return res.json('La categoría fue guardada exitosamente!');
    }

    //Eliminar una categoria 
    public async eliminarCategoriaobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from categoria_obra where id_co = ?", [codigo]);
        return res.json('La categoría fue eliminada exitosamente!')

    }

    //La actualización una categoria
    public async actualizarCategoriaobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
        await conectar.query("update categoria_obra set ? where id_co = ?", [nuevos_datos,codigo]);
        return res.json('La categoría se actualizo exitosamente!')
    }

    //Se obtiene una categoria
    public async obtenerUnacategoriaobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let categoria = await conectar.query('select * from categoria_obra where id_co = ?', [codigo]);
        return res.json(categoria);
    }



}