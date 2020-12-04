//importamos la clase del archivo controller para hacer uso en la ruta
import { ClasecontactoController } from "../controllers/clasecontacto.controller";
import { Router } from "express";

const enrutadorClasecontacto = Router();
//creamos una instancia de la clase 
const clasecontactoController = new ClasecontactoController;

//hacemos uso de las funciones de router en la variable enrutador
enrutadorClasecontacto.route('/clasecontacto').get(clasecontactoController.listarClasecontacto);



//exportamos las rutas
export default enrutadorClasecontacto;