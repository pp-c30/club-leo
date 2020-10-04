import { Router } from "express";
import { tipoobraController } from "../controllers/tipoobra.controller";

const TipoObraController = new tipoobraController();
const enrutadorTipoObra = Router();


enrutadorTipoObra .route('/tipoobra').get(TipoObraController.listarTipoObra);
enrutadorTipoObra .route('/tipoobra').post(TipoObraController.guardarTipoObra);
enrutadorTipoObra .route('/tipoobra/:id_codigo').delete(TipoObraController.eliminarTipoObra);
enrutadorTipoObra .route('/tipoobra/:id_codigo').put(TipoObraController.actualizarTipoObra);
enrutadorTipoObra .route('/tipoobra/:id_codigo').get(TipoObraController.obtenerTipoObra);


export default enrutadorTipoObra ;