//importamos la clase del archivo controller para hacer uso en la ruta
import { CategoriagaleriaController } from "../controllers/categoriagaleria.controller";
import { Router } from "express";

let enrutadorCategoriagaleria = Router();
//creamos una instancia de la clase 
let categoriagaleriaController = new CategoriagaleriaController;

//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriagaleria.route('/categoriagaleria').get(categoriagaleriaController.listarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria').post(categoriagaleriaController.guardarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').delete(categoriagaleriaController.eliminarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').put(categoriagaleriaController.actualizarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').get(categoriagaleriaController.obtenerUnacategoriagaleria);

//exportamos las rutas
export default enrutadorCategoriagaleria;