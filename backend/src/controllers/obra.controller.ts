import { conexion } from "../database";
import { Request, Response } from "express";
import { Obra } from "../models/obra";


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
        let Obra:Obra = req.body;
        await conectar.query("insert into obra set ?", [Obra]);
        return res.json("La obra fue guerdada exitosamente");
    }

    //Eliminar una obra
    public async eliminarObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from obra where id_obra = ?", [codigo]);
        return res.json("La obra fue eliminada exitosamente");
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

}