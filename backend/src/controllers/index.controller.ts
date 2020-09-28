import { Request, Response } from "express";

export function mensaje_bienvenida(Req:Request, Res:Response)
{
    Res.json("Esta es la ruta principal de la pagina");
}

