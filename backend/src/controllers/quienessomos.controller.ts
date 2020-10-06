import { conexion } from "../database";
import { Request, Response } from "express";
import { Iquienessomos } from "../models/quienessomos";


export class QuienessomosController
{
    //Listar quienes somos
    public async listarQuienesomos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let descripcion = await conectar.query("select * from quienes_somos");
        return res.json(descripcion);
    }


    //Guardar quienes somos
    public async guardarQuienessomos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let descripcion:Iquienessomos = req.body;
        await conectar.query("insert into quienes_somos set ?", [descripcion]);
        return res.json("la descripción fue guardada exitosamente!");
    }

    //La eliminación de descripcion
    public async eliminarQuienessomos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from quienes_somos where id_qs = ?", [codigo]);
        return res.json("la descripción fue eliminada exitosamente!");
    }

    //La actualización de una descripcion
     public async actualizarQuienessomos(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
        await bd.query("update quienes_somos set ? where id_qs = ?", [nuevos_datos,codigo]);
        return res.json('La descripción se actualizo exitosamente!');
   
    }


    //Obtener una descripción
    public async obtenerUnquienessomos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let unadescripcion = await conectar.query("select * from quienes_somos where id_qs= ?", [codigo]);
        return res.json(unadescripcion); 

    }

}