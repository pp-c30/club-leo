import { Router } from "express";
//importamos la clase del archivo controller para hacer uso en la ruta
import { QuienessomosController } from "../controllers/quienessomos.controller";

//creamos una instancia de la clase 
const quienessomosController = new QuienessomosController();
const enrutadorQuienesSomos = Router();

//hacemos uso de las funciones de router en la variable enrutador
enrutadorQuienesSomos.route('/quienessomos').get(quienessomosController.listarQuienesomos);
enrutadorQuienesSomos.route('/quienessomos').post(quienessomosController.guardarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').delete(quienessomosController.eliminarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').put(quienessomosController.actualizarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').get(quienessomosController.obtenerUnquienessomos);

//exportamos las rutas
export default enrutadorQuienesSomos;
