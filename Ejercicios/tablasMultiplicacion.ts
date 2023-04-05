/*
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/

import * as rls from "readline-sync";

let numeroTabla: number = rls.questionInt ('ingrese el numero de tabla que desea ver: ');
let numeroHasta: number = rls.questionInt ('ingrese hasta que numero deberia multiplicar: ');
for(let contador: number = 1; contador <= numeroHasta ; contador ++ ){
    console.log('resultado de ',numeroTabla, 'x', contador , '=', numeroTabla * contador);
}