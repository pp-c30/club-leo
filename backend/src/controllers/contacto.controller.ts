import { conexion } from "../database";
import { Request, Response } from "express";
import { IContacto } from "../models/contacto";


export class ContactoController
{
    //Listar todos los contactos
    public async listarContactos(req:Request, res:Response)
    {
        const conectar = await conexion();
        let contacto = await conectar.query("select *, (select clase from clase_contacto where id_clase = c.clase) as clase, clase as id_clase from contacto c");
        return res.json(contacto);
    }


    //Guardar contacto
    public async guardarContacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let Contacto:IContacto = req.body;
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
   
        await bd.query("update contacto set ? where id_contacto = ?", [nuevos_datos,codigo]);
   
        return res.json('El contacto se actualizo exitosamente!');
   
    }


    //Obtener un contacto
    public async obtenerContacto(req:Request, res:Response)
    {
        const conectar = await conexion();
        let codigo = req.params.id_codigo;
        let contacto = await conectar.query("select * from contacto where id_contacto= ?", [codigo]);
        return res.json(contacto); 

    }

}