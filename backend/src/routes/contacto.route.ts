import { Router } from "express";
import { contactoController } from "../controllers/contacto.controller";

const ContactoController = new contactoController();
const enrutadorContacto = Router();


enrutadorContacto.route('/contacto').get(ContactoController.listarContactos);
enrutadorContacto.route('/contacto').post(ContactoController.guardarContacto);
enrutadorContacto.route('/contacto/:id_codigo').delete(ContactoController.eliminarContacto);
enrutadorContacto.route('/contacto/:id_codigo').put(ContactoController.actualizarContacto);
enrutadorContacto.route('/contacto/:id_codigo').get(ContactoController.obtenerContacto);


export default enrutadorContacto;