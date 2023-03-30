import Big from "big.js";
import operadores from "./operadores.js";
import isNumber from "./isNumber.js";

export default function operaciones (estado, nombreDeBoton) {

    if (nombreDeBoton === "AC"){
        return {
            total: null,
            siguiente: null,
            operador: null
        }
    }

    if(isNumber(nombreDeBoton)){
        if(nombreDeBoton === "0" && estado.siguiente === "0") return {}

        if(estado.operador){
            
            if(estado.siguiente) return {siguiente: estado.siguiente + nombreDeBoton}
            
            return {siguiente: nombreDeBoton}
        }

        if(estado.siguiente) {
            const siguiente = estado.siguiente === "0" ? nombreDeBoton: estado.siguiente + nombreDeBoton
            
            return {siguiente, total: null}
        }

        return {siguiente: nombreDeBoton, total: null}
    }

    if(nombreDeBoton === "/") {
        if(estado.operador && estado.siguiente){

            const result = operadores(estado.total, estado.siguiente, estado.operador)

            return {total: Big(result).div(Big("100").toString()), siguiente: null, operador: null}
        }
    }


}

