import express, {Application} from "express"; //me traigo la funcion aplicacion de express y express
import enrutadorIndex  from "./routes/index.route";
import  enrutadorImagenObras  from "./routes/imagenobra.route";
import enrutadorObras from "./routes/obra.route";
import enrutadorDonaciones from "./routes/donaciones.route";

export class server{
    app:Application;

    constructor(){
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
        
    }

    configuracion()
    {
        this.app.set('port', process.env.port || '3000'); //guardara un puerto remoto o guardara el puerto 3000
    }

    listen(){
        this.app.listen(this.app.get('port')); //obtendra el puerto del metodo configuracion
        console.log("servidor corriendo en el purto 3000")
    }

    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorImagenObras);
        this.app.use(enrutadorObras);
        this.app.use(enrutadorDonaciones);
    }

    middleware()
    {
        this.app.use(express.json());
    }
}


