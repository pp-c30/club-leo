import { Request, Response } from "express";
import { conexion } from "../database";

export class ClasecontactoController
{
    public async listarClasecontacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let clase = await conectar.query("select * from clase_contacto");
        return res.json(clase);
    }
}