import { Router } from "express";
import { ContactoController } from "../controllers/contacto.controller";
import { validarToken } from "../libs/verificartoken";

const contactoController = new ContactoController();
const enrutadorContacto = Router();


enrutadorContacto.route('/contacto').get(contactoController.listarContactos);
enrutadorContacto.route('/contacto-admin').get(validarToken, contactoController.listarContactos);

enrutadorContacto.route('/contacto').post(contactoController.guardarContacto);
enrutadorContacto.route('/contacto/:id_codigo').delete(contactoController.eliminarContacto);
enrutadorContacto.route('/contacto/:id_codigo').put(contactoController.actualizarContacto);
enrutadorContacto.route('/contacto/:id_codigo').get(contactoController.obtenerContacto);


export default enrutadorContacto;