import { conexion } from "../database";
import { Request, Response } from "express";
import { Contacto } from "../models/contacto";


export class contactoController
{
    //Listar todos los contactos
    public async listarContactos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let contacto = await conectar.query("select * from contactos");
        return res.json(contacto);
    }


    //Guardar contacto
    public async guardarContacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let Contacto:Contacto = req.body;
        await conectar.query("insert into contacto set ?", [Contacto]);
        return res.json("El contacto se guardo exitosamente");
    }

    //Eliminar un contacto
    public async eliminarContacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        await conectar.query("delete from contacto where id_contacto = ?", [codigo]);
        return res.json("El contacto fue eliminado exitosamente");
    }

    //Actualizar un contacto
     public async actualizarContacto(req:Request, res:Response)
    {
        const bd = await conexion();
        let codigo = req.params.id_codigo;
        let nuevos_datos = req.body;
   
        await bd.query("update donaciones set ? where id_contacto = ?", [nuevos_datos,codigo]);
   
        return res.json('El contacto se actualizo exitosamente!');
   
    }


    //Obtener un contacto
    public async obtenerContacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let contacto = await conectar.query("select * from donacion where id_contacto= ?", [codigo]);
        return res.json(contacto); 

    }

}