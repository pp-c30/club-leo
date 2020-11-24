import { conexion } from "../database";
import { Request, Response } from "express";
import { TipoObra } from "../models/tipoobra";


export class tipoobraController
{
    //Listar todos los tipos de obras
    public async listarTipoObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let tipoobra = await conectar.query("select * from tipo_obra");
        return res.json(tipoobra);
    }


    //Guardar tipos de obras
    public async guardarTipoObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let TipoObra:TipoObra = req.body;
        await conectar.query("insert into tipo_obra set ?", [TipoObra]);
        return res.json("Los tipos de obra fueron guardadas exitosamente");
    }

    //Eliminar un tipo de obra
    public async eliminarTipoObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        try{
        await conectar.query("delete from tipo_obra where id_tipo = ?", [codigo]);
        return res.json("El tipo fue eliminadO exitosamente!");
    
        }catch (error) {
         return res.json("No se pudo eliminar una Tipo de obra que este siendo utilizada por una obra");
        }
        
    }

    //La actualizacion de un tipo de obra
     public async actualizarTipoObra(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update tipo_obra set ? where id_tipo = ?", [nuevos_datos,codigo]);
   
        return res.json('el tipo de obra se actualizo exitosamente!');
   
    }


    //Obtener un tipo de obra
    public async obtenerTipoObra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let tipoobra = await conectar.query("select * from tipo_obra where id_tipo= ?", [codigo]);
        return res.json(tipoobra); 

    }

}