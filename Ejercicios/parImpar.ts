/*•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo */

import * as rls from "readline-sync";

let numero: number = rls.questionInt('ingrese el numero: ');
//si espar es 0 el numero ingresado es par, sino es impar
const esPar = numero % 2;


switch (esPar) {
    case 0:{
        console.log('es par');
        if(numero == 0)
        console.log('el numero ingresado es 0'); 
        break;
    }
        
    case 1:
        console.log('no es par');
        break;
}
