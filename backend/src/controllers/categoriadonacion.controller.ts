import { Request, Response } from "express";
import { conexion } from "../database";
import { Icategoria } from "../models/categoriadonacion";

export class CategoriadonacionController
{
    public async listarCategoriadonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let categoria = await conectar.query("select * from categoria_donacion");
        return res.json(categoria);
    }

    public async guardarCategoriadonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let categoria:Icategoria = req.body;
        await conectar.query("insert into categoria_donacion set ?",[categoria]);
        return res.json('La categoría fue guardada exitosamente!');
    }

    public async eliminarCategoriadonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from categoria_donacion where id_categoria = ?",[codigo]);
        return res.json('La categoría fue eliminada exitosamente!');
    }

    public async actualizarCategoriadonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
        await conectar.query("update categoria_donacion set ? where id_categoria = ?",[nuevos_datos,codigo]);
        return res.json("La categoría fue actualizada exitosamente!");
    }

    public async obtenerUnacategoriadonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let categoria = await conectar.query('select * from categoria_donacion where id_categoria = ?',[codigo]);
        return res.json(categoria);
    }
}