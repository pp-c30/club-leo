import express, {Application} from "express"; //me traigo la funcion aplicacion de express y express

export class server{
    app:Application;

    constructor(){
        this.app = express();
    }
}