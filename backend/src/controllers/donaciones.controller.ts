import { conexion } from "../database";
import { Request, Response } from "express";
import { Donaciones } from "../models/donaciones";


export class donacionesController
{
    //Listar todas las donaciones
    public async listarDonaciones(req:Request, res:Response)
    {
        const conectar = await conexion();
        let donaciones = await conectar.query("select * from donaciones");
        return res.json(donaciones);
    }


    //Guardar donaciones
    public async guardarDonaciones(req:Request, res:Response)
    {
        const conectar = await conexion();
        let Donaciones:Donaciones = req.body;
        await conectar.query("insert into donaciones set ?", [Donaciones]);
        return res.json("Las donaciones fueron guardadas exitosamente");
    }

    //Eliminar una donacion
    public async eliminarDonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from donaciones where id_donacion = ?", [codigo]);
        return res.json("La donacion fue eliminada exitosamente");
    }

    //La actualizacion de una donacion
     public async actualizarDonaciones(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update donaciones set ? where id_donacion = ?", [nuevos_datos,codigo]);
   
        return res.json('La donacion se actualizo exitosamente!');
   
    }


    //Obtener una donacion
    public async obtenerDonacion(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let donacion = await conectar.query("select * from donaciones where id_donacion= ?", [codigo]);
        return res.json(donacion); 

    }

}