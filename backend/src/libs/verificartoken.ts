import { Response, Request, NextFunction } from "express";
import  jwt  from "jsonwebtoken";

export function validarToken(req:Request, res:Response, next:NextFunction)
{
    //recive el token en header al iniciar secion
    const token:any = req.header('auth-token');

    //si no existe el token
    if(!token){
        res.json('Acesso denegado');
    }


    // si existe el token, verifico el token que llega, y procesara la variable de entorno para saber si es valido o no
    const datosToken = jwt.verify(token, process.env.TOKEN_SECRET || '12qwaszx');

    console.log(datosToken);

    //si funciona correctamente se ejecutara el siguiente metodo de la ruta para mostrar
    next();
}