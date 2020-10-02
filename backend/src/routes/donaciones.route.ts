import { Router } from "express";
import { donacionesController } from "../controllers/donaciones.controller";

const DonacionesController = new donacionesController();
const enrutadorDonaciones = Router();


enrutadorDonaciones.route('/donaciones').get(DonacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(DonacionesController.guardarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_codigo').delete(DonacionesController.eliminarDonacion);
enrutadorDonaciones.route('/donaciones/:id_codigo').put(DonacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_codigo').get(DonacionesController.obtenerDonacion);


export default enrutadorDonaciones;