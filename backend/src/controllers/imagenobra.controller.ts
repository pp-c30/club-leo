import { conexion } from "../database";
import { Request, Response } from "express";
import { Iimagenobra } from "../models/imagenobras";


export class imagenobraController
{
    public async listarImagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen = await conectar.query("select * from imagen_obra");
        return res.json(imagen);
    }

    public async guardarImagenobra(req:Request, res:Response)
    {
        const conectar = await conexion();
        let imagen:Iimagenobra = req.body;
        await conectar.query("insert into imagen_obra set ?", [imagen]);
        return res.json("la pelicula fue guerdada exitosamente");
    }


}