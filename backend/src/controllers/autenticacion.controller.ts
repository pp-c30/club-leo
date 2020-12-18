import { conexion } from "../database";
import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";


export class Autenticacioncontroller 
{
    async registrar(req:Request, res:Response)
    {
        const salt = await bcrypt.genSalt(10);
        const password_cifrada = await bcrypt.hash(req.body.password, salt);

        const unUsuario = {
            username: req.body.username,
            password: password_cifrada,
            email: req.body.email
        }

        const conectar = await conexion();

        const resultado = await conectar.query('insert into usuario set ?', [unUsuario]);

        //con la libreria jwt crea un  token con la id del usuario registrado y procesara una variable de entorno
        const token = jwt.sign({_id:resultado.insertId}, process.env.TOKEN_SECRET || '12qwaszx');

        res.json(token);

    }

    async ingresar(req:Request, res:Response)
    {
        const conectar = await conexion()

        //se trae los datos del usuario 
        const usuario = await conectar.query('select * from usuario where username = ?', [req.body.username]);

        if(!usuario[0])
        {
            res.json('Usuario o contraseña incorrecta');
        }else{
            //se compara la contraseña que se ingresara
            const correctPasword = await bcrypt.compare(req.body.password, usuario[0].password);
            //si la contraseña no existe 
            if(!correctPasword)
            {
                res.json('Contraseña incorrecta');
            }else{
                //si existe crea un token para la id
                const token:string = jwt.sign({_id:usuario[0].id_usuario}, process.env.TOKEN_SECRET || '12qwaszx',{
                    expiresIn:60*60*24
                });
                //se enviara el token en un res.header y los datos del usuario en un res.json para poder conformar un perfil del usuario
                res.json(token);
            }
        }

    }
}