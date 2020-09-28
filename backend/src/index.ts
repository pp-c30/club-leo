import { server } from "./server"; //me traigo la clase server del archivo server

function principal() 
{
    const servidor = new server(); //se instancia la clase para luego ser ejecutada
    servidor.listen(); //luego tambien se correra el servidor
}

principal(); // se ejecuta la funcion principal